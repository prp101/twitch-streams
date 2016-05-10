/*    Funkcija za provjeru aktivne rute i dodjeljivanje klase: active ukoliko ruta odgovara    */
app.controller('Active', function($scope,$location) {
   $scope.getClass = function (path) {
  return ($location.path().substr(0, path.length) === path) ? 'active' : '';
};
});

