angular.module('userServices',[])
.factory('User',function($http){
    var userFactory = {};
    
  userFactory.create = function(regData){
       return $http.post('/API/users',regData);
   }
  
  userFactory.activate = function(){
      return $http.put('/API/activate/'+token);
  }

  
   return userFactory;
});