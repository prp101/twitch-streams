/* Da može primiti link */ 
app.filter('trustThisUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}]);
/* prikazuje linkove filtrirane po igrici */
app.controller('ShowLink', function ($scope, $http, $routeParams) {
	 $scope.Lang="";
	$scope.game = $routeParams.id;
  $http.get("https://api.twitch.tv/kraken/search/streams?limit=100&q=" + $routeParams.id).then(function(response) {
	    $scope.gameN=$routeParams.id;
        $scope.myLink = response.data.streams;
		$scope.link="http://player.twitch.tv/?channel=";
    });
});
