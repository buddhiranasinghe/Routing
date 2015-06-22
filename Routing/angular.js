var app = angular.module('myApp',['ngRoute']);

app.controller('homeCtrl',function($scope){
    $scope.hide=true;
    $scope.show=true;

    $scope.submit = function () {
        $scope.hide=false;
        $scope.show=false;
        var d = new Date();
        var time = d.getHours();
        if (time < 12) {
            $scope.greeting = "MORNING...!";
        }
        else  {
            $scope.greeting = "AFTERNOON...!";
        }
    }

    $scope.back = function() {
        $scope.hide=true;
        $scope.show=true;
        $scope.name = "";
    }
});

app.controller('bioCtrl', function($scope){
    $scope.x = "pic";
});

app.controller('contactCtrl', function($scope){
    $scope.x = "contact";
});


app.config(function($routeProvider){
    $routeProvider.when('/home',{
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    })
    .when('/bio',{
        templateUrl: 'bio.html',
        controller: 'bioCtrl'
    })
    .when('/contact',{
        templateUrl: 'contact.html',
        controller: 'contactCtrl'
    })
    .otherwise('/home')
});

