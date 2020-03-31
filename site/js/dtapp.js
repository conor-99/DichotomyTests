var app = angular.module('dtapp', ['ngCookies', 'ngSanitize'])

app.controller('dtctrl', function($scope, $cookies, $sce, $http) {

    /* Page initialisation */
    var Initialisation = {

        index: function() {
            JsonReader.loadBasicInfo();
        },

        test: function() {

            $scope.testId = getParameterInt(PARAM_TEST_ID);
            $scope.started = false;
            $scope.resultsExist = ($cookies.get(`${COOKIE_RESULT_PREFIX}${$scope.testId}`) !== undefined);

            JsonReader.loadQuestionsInfo($scope.testId);

        },

        results: function() {
            JsonReader.loadResultsInfo();
        }

    };

    /* Reading in JSON information */
    var JsonReader = {

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
        loadResultsInfo: function() {
            $http.get(`${JSON_DIRECTORY}/results.json`).then(function (json) {
                $scope.resultsInfo = json.data.tests;
            });
        }

    };

    /* Handling test functionality */
    var Test = {

        start: function() {

            $scope.started = true;

            $scope.isTypeStatement = ($scope.test.testType === TEST_TYPES.STATEMENT);
            $scope.isTypeImages = ($scope.test.testType === TEST_TYPES.IMAGES);

            $scope.answers = Array($scope.test.numQuestions).fill(0);
            $scope.current = 1;

        },

        next: function(multiplier) {

            $scope.answers[$scope.current - 1] = multiplier;
            $scope.current++;

            if ($scope.current > $scope.answers.length)
                this.finish();

        },

        prev: function() {
            $scope.current--;
        },

        finish: function() {

        }

    };

    /* index.html */
    $scope.initIndex = Initialisation.index;

    /* test.html */
    $scope.initTest = Initialisation.test;
    $scope.start = Test.start;
    $scope.next = Test.next;
    $scope.prev = Test.prev;

    /* results.html */
    $scope.initResults = Initialisation.results;

});
