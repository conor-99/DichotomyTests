var app = angular.module('dtapp', ['ngCookies', 'ngSanitize'])

app.controller('dtctrl', function($scope, $cookies, $sce, $http) {

    /* Page initialisation */
    var Initialisation = {

        index: function() {
            JsonReader.loadBasicInfo();
        },

        test: function() {
            JsonReader.loadQuestionsInfo();
        },

        results: function() {
            JsonReader.loadResultsInfo();
        }

    }

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
        loadQuestionsInfo: function() {
            $http.get(`${JSON_DIRECTORY}/questions.json`).then(function (json) {
                $scope.questionsInfo = json.data.tests;
            });
        },

        /* Reads in results-related test information */
        loadResultsInfo: function() {
            $http.get(`${JSON_DIRECTORY}/results.json`).then(function (json) {
                $scope.resultsInfo = json.data.tests;
            });
        }

    }

    /* Functions called from HTML */
    $scope.initIndex = Initialisation.index();
    $scope.initTest = Initialisation.test();
    $scope.initResults = Initialisation.results();

});
