app.controller('Streamovi2', function($scope, $http, $routeParams) {

	 $scope.Lang= $routeParams.lan;
	  $scope.value=$routeParams.val;
	  
    $http.get("https://api.twitch.tv/kraken/streams?limit=48&offset=" + $routeParams.val).then(function(response) {
	    $scope.myData = response.data;
		$scope.myName = response.data.streams;
		$scope.link="http://player.twitch.tv/?channel=";
				 
 });
});