'use strict';
  app.factory('loginService',function($http){
      return {
          login: function (user) {
              console.log(user);
              var $promise = $http.post('data/user.php', user);

              $promise.then(function(msg){
                  if(msg.data=='success') {
                      console.log("success login");
                  }
                  else {
                      console.log("error login");

                  }

              });
          }
      }
  });