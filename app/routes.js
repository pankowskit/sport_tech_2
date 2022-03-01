angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/about",{
        templateUrl: "app/templates/about.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/contact",{
        templateUrl: "app/templates/contact.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .when("/schedule",{
        templateUrl: "app/templates/schedule.html"
    })
    .when("/services",{
        templateUrl: "app/templates/services.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});