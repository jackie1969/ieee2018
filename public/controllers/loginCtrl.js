angular.module('loginController',['authServices'])
.controller('loginCtrl',function(auth){
    var app = this;
    
    if(auth.isLogged())
        {
            console.log("USer is logged in");
        }
    else{
        console.log("USer is not logged in");
    }
    
   this.login = function(logData){
       app.errorMsg = false;
       
       auth.login(app.logData).then(function(data){
        if(data.data.success)
            {
                app.successMsg = data.data.message;
            }
        else
           {
               app.errorMsg = data.data.message;
           }
       });
       
   };
    
    this.logout = function(){
         auth.logout();
    };
  
                                    
});
