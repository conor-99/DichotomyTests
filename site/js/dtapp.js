let app = angular.module('dtapp', ['ngCookies', 'ngSanitize'])

app.controller('dtctrl', function($scope, $cookies, $sce, $http) {

    /* Page initialisation */
    let Initialisation = {

        index: function() {

            $scope.acceptedCookies = ($cookies.get(COOKIE_ACCEPTED) !== undefined);

            JsonReader.loadBasicInfo();

        },

        test: function() {

            $scope.testId = getParameterInt(PARAM_TEST_ID);
            $scope.started = false;
            $scope.resultsExist = ($cookies.get(`${COOKIE_RESULT_PREFIX}${$scope.testId}`) !== undefined);

            JsonReader.loadQuestionsInfo($scope.testId);

        },

        results: function() {

            $("[data-toggle=tooltip]").tooltip();

            $scope.testId = getParameterInt(PARAM_TEST_ID);
            $scope.percentages = JSON.parse($cookies.get(`${COOKIE_RESULT_PREFIX}${$scope.testId}`));

            JsonReader.loadResultsInfo($scope.testId);

        }

    };

    /* Reading in JSON information */
    let JsonReader = {

        /* Reads in basic test information */
        loadBasicInfo: function() {
            $http.get(`${JSON_DIRECTORY}/basic.json`).then(function (json) {

                $scope.basicInfo = json.data.tests;

                for (let i = 0; i < $scope.basicInfo.length; i++) {
                    $scope.basicInfo[i].minutes = Math.ceil($scope.basicInfo[i].questions / ANSWERS_PER_MINUTE);
                }

            });
        },

        /* Reads in question-related test information */
        loadQuestionsInfo: function(test_id) {
            $http.get(`${JSON_DIRECTORY}/questions.json`).then(function (json) {

                $scope.test = json.data.tests.filter(test => test.id === test_id)[0];
                $scope.test.numQuestions = $scope.test.questions.length;
                $scope.test.numScales = $scope.test.questions[0].effects.length;

            });
        },

        /* Reads in results-related test information */
        loadResultsInfo: function(test_id) {
            $http.get(`${JSON_DIRECTORY}/results.json`).then(function (json) {

                $scope.results = json.data.tests.filter(test => test.id === test_id)[0];

                // To-do: replace convoluted logical statements below with new parameters in results.json

                $scope.isTypeBars = ($scope.results.resultsType === RESULT_TYPES.BARS || $scope.results.resultsType === RESULT_TYPES.BARS_OVERALL);
                $scope.isTypeCompass = ($scope.results.resultsType === RESULT_TYPES.COMPASS);
                $scope.isTypeBarsOverall = ($scope.results.resultsType === RESULT_TYPES.BARS_OVERALL);
                $scope.isTypePsych = ($scope.results.resultsType === RESULT_TYPES.BARS_PSYCH);
                $scope.isTypePsychOverall = ($scope.results.resultsType === RESULT_TYPES.BARS_PSYCH_OVERALL);

                $scope.showExplainAxes = ($scope.testId !== 4 && !($scope.isTypePsych || $scope.isTypePsychOverall));
                $scope.showExplainPsych = ($scope.testId === 6 || $scope.testId === 7);

                $scope.markers = [];

                angular.forEach($scope.results.markers, function (marker, _) {

                    let s1 = marker.scales[0];
                    let s2 = marker.scales[1];

                    let hasFirst = (s1.bar === 0 && $scope.percentages[s1.scale] > s1.min) || (s1.bar === 1 && (1 - $scope.percentages[s1.scale]) > s1.min);
                    let hasSecond = (s2.bar === 0 && $scope.percentages[s2.scale] > s2.min) || (s2.bar === 1 && (1 - $scope.percentages[s2.scale]) > s2.min);

                    if (hasFirst && hasSecond)
                        $scope.markers.push(marker);

                });

                $scope.additionalHeight = ($scope.markers.length > 0) ? 60 : 0;

                if ($scope.isTypeBarsOverall)
                    $scope.additionalHeight += 30;

                if ($scope.isTypeCompass)
                    Compass.generate($scope.results, $scope.percentages);

            });
        }

    };

    /* Handling test functionality */
    let Test = {

        start: function() {

            $scope.started = true;

            $scope.isTypeStatement = ($scope.test.testType === TEST_TYPES.STATEMENT || $scope.test.testType === TEST_TYPES.STATEMENT_SURVEY);
            $scope.isTypeImages = ($scope.test.testType === TEST_TYPES.IMAGES);
            $scope.isTypeScenario = ($scope.test.testType === TEST_TYPES.SCENARIO);
            $scope.isTypeSurvey = ($scope.test.testType === TEST_TYPES.STATEMENT_SURVEY);
            $scope.isTypeCustomFear = ($scope.test.testType === TEST_TYPES.CUSTOM_FEAR);
            $scope.isTypeCustomOcd = ($scope.test.testType === TEST_TYPES.CUSTOM_OCD);

            $scope.hideNeutral = ($scope.testId === 2 || $scope.testId === 5);

            $scope.answers = Array($scope.test.numQuestions).fill(0);
            $scope.current = 1;

            Test.setPercentage();

        },

        next: function(answer) {

            $scope.answers[$scope.current - 1] = answer;

            if ($scope.current === $scope.test.numQuestions)
                Test.finish();
            else {
                $scope.current++;
                Test.setPercentage();
            }

        },

        prev: function() {
            $scope.current--;
            Test.setPercentage();
        },

        finish: function() {

            $scope.scores = Array($scope.test.numScales).fill(0);
            $scope.maxScores = Array($scope.test.numScales).fill(0);
            $scope.percentages = Array($scope.test.numScales);

            // Calculate raw overall scores and max possible raw scores
            for (let i = 0; i < $scope.test.numQuestions; i++) {
                for (let j = 0; j < $scope.test.numScales; j++) {
                    $scope.scores[j] += $scope.answers[i] * $scope.test.questions[i].effects[j];
                    $scope.maxScores[j] += Math.abs($scope.test.questions[i].effects[j]);
                }
            }

            // Convert raw scores to percentages
            for (let i = 0; i < $scope.test.numScales; i++) {
                $scope.percentages[i] = ($scope.scores[i] + $scope.maxScores[i]) / (2 * $scope.maxScores[i]);
            }

            // Store results in cookie
            $cookies.put(`${COOKIE_RESULT_PREFIX}${$scope.testId}`, JSON.stringify($scope.percentages));

            if ($scope.isTypeSurvey) {
                $scope.inSurvey = true;
            } else {

                // Ignore survey string
                $scope.survey = '';

                // Send results to database
                Test.sendToDb();

                // Go to results page
                Test.goToResults();

            }

        },

        goToResults: function() {
            window.location.href = `results.html?id=${$scope.testId}`;
        },

        setPercentage: function() {
            $scope.percentage = 100 * ($scope.current / $scope.answers.length);
        },

        sendToDb: function() {

            let url = `${API_URL}store_result.php`;
            let params = {
                'id': $scope.testId,
                'answers': $scope.answers.join(','),
                'percentages': $scope.percentages.join(','),
                'survey': $scope.survey
            };

            $http({
                method: 'GET',
                url: url,
                params: params
            });

        },

        submitSurvey: function() {

            // Set survey string
            $scope.survey = `${$scope.surveyScale},${$scope.surveyAge},${$scope.surveyGender},${$scope.surveyEthnicity}`;

            // Send results to database
            Test.sendToDb();

            // Go to results page
            Test.goToResults();

        }

    };

    /* Miscellaneous */
    $scope.Math = window.Math;

    $scope.range = function(n) {
        let a = [];
        for (let i = 0; i < n; i++) {
            a.push(i);
        }
        return a;
    };

    $scope.mean = function(a) {
        let m = 0;
        for (let i = 0; i < a.length; i++) {
            m += a[i];
        }
        return m / a.length;
    }

    $scope.acceptCookies = function() {
        $cookies.put(COOKIE_ACCEPTED, 'yes');
    }

    /* index.html */
    $scope.initIndex = Initialisation.index;

    /* test.html */
    $scope.initTest = Initialisation.test;
    $scope.goToResults = Test.goToResults;
    $scope.start = Test.start;
    $scope.next = Test.next;
    $scope.prev = Test.prev;
    $scope.submitSurvey = Test.submitSurvey;

    /* results.html */
    $scope.initResults = Initialisation.results;

});
