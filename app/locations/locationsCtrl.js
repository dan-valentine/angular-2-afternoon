angular.module('devmtnTravel').controller('locationsCtrl', function ($scope, mainSrvc) {
    mainSrvc.getTravelInfo().then(resp => {
        $scope.locations = resp.data
    }).catch(err =>{
        console.log(err);
    })
});