angular.module('devmtnTravel').controller('bookedCtrl', function ($scope, $stateParams, mainSrvc) {
    mainSrvc.getPackageInfo().then(resp =>{
        $scope.allPackages = resp.data
        $scope.package = resp.data.find(package => package.id == $stateParams.id)
    }).catch(err => {
        console.log(err);
    })
});