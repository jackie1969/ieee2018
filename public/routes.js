angular.module('routes',['ngRoute'])
.config(function($routeProvider){
   $routeProvider.when('/',{
       templateUrl:  'app/views/pages/register.html',
       controller: 'regCtrl',
       controllerAs: 'register'
   })
    .when('/login',{
      templateUrl: 'app/views/pages/login.html' 
   })
    .when('/activate/:token',{
       templateUrl: 'app/views/pages/activate.html',
       controller: 'emailCtrl',
       controllerAs: 'email'
       
   })
    
})