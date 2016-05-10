
/*
Učitava top 100 igrica
*/
app.controller('Igrice', function ($scope, $http) {
  $http.get("https://api.twitch.tv/kraken/games/top?limit=100" ).then(function(response) {
        $scope.myGames = response.data.top;
    });
});
