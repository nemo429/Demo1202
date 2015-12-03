/**
 * Created by yhuang on 12/2/2015.
 */

angular.module('MyApp',['ui.router'])
.config(function($stateProvider,$urlRouteProvider){
    $urlRouteProvider.otherwise('/state2');
    $stateProvider
        .state('state1',{
            url:'/order',
            templateUrl:'state1.html',
            controller:'MainCtrl'
        })
        .state('state1.list',{
            url:'/{text}Adults/{test}Children',
            templateUrl:'state1.list.html',
            controller:'MainCtrl'
        })
        .state('State.list.list2',{
            url:'/{text2}Rooms',
            templateUrl:'state1.list.list2.html',
            controller:'MainCtrl'
        })
        .state('state2',{
            url:'/',
            templateUrl:'second.html',
            controller:'MainCtrl'
        })
})
.controller('MainCtrl',function($scope,$stateParams){
    $scope.text3 = $stateParams.text2;
});