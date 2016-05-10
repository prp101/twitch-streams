app.controller('ShowLink2', function ($scope, $http, $routeParams) {
	 $scope.Lang= $routeParams.lan;
	$scope.game = $routeParams.id;
  $http.get("https://api.twitch.tv/kraken/search/streams?limit=100&q=" + $routeParams.id).then(function(response) {
	    $scope.gameN=$routeParams.id;
        $scope.myLink = response.data.streams;
		$scope.link="http://player.twitch.tv/?channel=";
    });
});
