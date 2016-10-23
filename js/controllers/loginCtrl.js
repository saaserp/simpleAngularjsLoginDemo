'use strict';
app.controller('loginCtrl',function($scope,loginService){
    $scope.login=function(user){
        console.log('login controller function');
        loginService.login(user,$scope);
    }
});