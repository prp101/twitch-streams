/* Iniciranje modula i rute za razne linkove */
var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function ($routeProvider)
           {
  $routeProvider
  .when('/home/:val', {
    controller: 'Streamovi',
    templateUrl: 'views/streams.html'
  })
  .when('/streams/:id', {
        controller: 'ShowLink',
        templateUrl: 'views/photo.html'
        })
  .when('/streams', {
        controller: 'Igrice',
        templateUrl: 'views/home.html'
        })
  .when('/home/:val', {
        controller: 'Streamovi',
        templateUrl: 'views/streams.html'
        })
		 .when('/home/:val/:lan', {
        controller: 'Streamovi2',
        templateUrl: 'views/streams.html'
        })
		.when('/streams/:id/:lan', {
        controller: 'ShowLink2',
        templateUrl: 'views/photo.html'
        })
		
		
  
  .otherwise({
    redirectTo: '/home/0'
  });
});

/*
  Twitch.init({clientId: 'h1ja07z8emnw3t8a10k40jmi9y2h6xn'}, function(error, status) {
    // the sdk is now loaded
  });
  
  */