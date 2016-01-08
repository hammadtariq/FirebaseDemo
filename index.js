
var app = angular.module('myApp',['firebase']);

app.controller('homeController',function($firebaseObject,$firebaseArray){

    var ref= new Firebase('https://asim.firebaseio.com/').child('/abc');
    //var abc = $firebaseObject(ref);
    /*this.func = function () {
        abc.email = this.email;
        abc.password = this.password;
        abc.$save();
    };*/
   // console.log(abc.email);
    this.messages = $firebaseArray(ref);
     var vm=this;
    this.addMessage = function() {
        this.messages.$add(
            {
                name:this.email,
                age:this.password
            });
    };
    vm.abc = $firebaseArray(ref);
    console.log(vm.abc);

});
