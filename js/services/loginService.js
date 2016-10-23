'use strict';
  app.factory('loginService',function($http){
      return {
          login: function (user,scope) {
              console.log(user);
              var $promise = $http.post('data/user.php', user);

              $promise.then(function(msg){
                  if(msg.data=='success') {
                      console.log("success login");
                      scope.msgTxt="登录成功";
                  }
                  else {
                      console.log("error login");
                      scope.msgTxt="登录失败";

                  }

              });
          }
      }
  });