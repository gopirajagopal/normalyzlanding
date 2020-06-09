angular.module("normalyz", []).controller("homecontroller", function($scope,$http) {  
    $scope.demo="" ;
    $scope.signup="";
    $scope.showdemo = false;
    $scope.showsignup=false;
    $scope.signupaction = function(){
        $http.get("http://demo.normalyz.com/registration/getsignup/" + $scope.signup)
        .then(function (response1) {
            $scope.showsignup=true;
        });
    }
 
    $scope.demoaction = function(){
        $http.get("http://demo.normalyz.com/registration/getdemo/" + $scope.demo)
        .then(function (response1) {
            $scope.showdemo = true;
        });
    }

    } )