angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrvc){
    mainSrvc.getPackageInfo().then(resp =>{
        console.log(resp.data);
        $scope.AllPackages = resp.data
        $scope.packages = $stateParams.country ?
        resp.data.filter(package => package.country == $stateParams.country)
        :
        resp.data;
    }).catch(err => console.log(err))
});