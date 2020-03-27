var app = angular.module('dtapp', ['ngCookies', 'ngSanitize'])

app.controller('dtctrl', function($scope, $cookies, $sce, $http) {

    /* Page initialisation */
    function init() {
        loadBasicInfo();
    }

    /* Reads in basic test information */
    function loadBasicInfo() {
        $http.get(`${JSON_DIRECTORY}/basicinfo.json`).then(function (json) {

            $scope.basicInfo = json.data.tests;

            for (let i = 0; i < $scope.basicInfo.length; i++) {
                $scope.basicInfo[i].minutes = Math.ceil($scope.basicInfo[i].questions / ANSWERS_PER_MINUTE);
            }

        });
    }

    /* Functions called from page */
    $scope.init = init;

});
