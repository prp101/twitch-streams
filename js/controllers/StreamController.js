/*
Dohvaćanje streamova sa glave stranice 
*/


app.controller('Streamovi', function($scope, $http, $routeParams) {
 $scope.Lang="";
	  $scope.value=$routeParams.val;
    $http.get("https://api.twitch.tv/kraken/streams?limit=48&offset=" + $routeParams.val).then(function(response) {
	    $scope.myData = response.data;
		$scope.myName = response.data.streams;
		$scope.link="http://player.twitch.tv/?channel=";
				 
 });
});

/* Iniciranje popup-a */
$(document).ready(function() {
	$(".fancybox").fancybox({
		padding : 0,
		maxWidth	: 500,
		maxHeight	: 400,
		fitToView	: false,
		autoSize	: false,
		closeClick	: true,
		autoCenter  : true

	});
});
