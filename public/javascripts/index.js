// define angular module/app
angular.module('marketApp', ['ngAnimate','ui.bootstrap'])

// create angular controller and pass in $scope and $http
// .controller('marketController',['$scope','$http', function($scope, $http) {
//   // create a blank object to hold our form information
//   // $scope will allow this to pass between controller and view
//   $scope.login = {};
//   // process the form
//   $scope.processForm = function() {
//     console.log("hello");
//   }
//
//   }]);
angular.module('marketApp').controller('ModalCtrl',function ($scope, $uibModal, $log) {


  $scope.animationsEnabled = true;
  $scope.open_signup = function (size) {
    var modalInstance_signup = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'signup.html',
      controller: 'signupCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.signup;
        }
      }
    });

    modalInstance_signup.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.open_login = function (size) {

    var modalInstance_login = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'signin.html',
      controller: 'loginCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.login;
        }
      }
    });

    modalInstance_login.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// // It is not the same as the $uibModal service used above.

angular.module('marketApp').controller('loginCtrl',['$scope','$http','$uibModalInstance',function ($scope,$http, $uibModalInstance) {


  $scope.ok = function () {
  console.log($scope.login);
    $http({
      method  : 'POST',
      url     : '/login',
      data    : $scope.login,  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {
      console.log(data);

      if (!data.success) {
        // if not successful, bind errors to error variables
        $scope.errorName = data.errors.name;
        $scope.errorSuperhero = data.errors.superheroAlias;
      } else {
        // if successful, bind success message to message
        $scope.message = data.message;
      }
    });
    $uibModalInstance.close($scope.login);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
angular.module('marketApp').controller('signupCtrl',['$scope','$http','$uibModalInstance',function ($scope,$http, $uibModalInstance) {


  $scope.ok = function () {
  console.log($scope.signup);
    $http({
      method  : 'POST',
      url     : '/signup',
      data    : $scope.signup,  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {
      console.log(data);

      if (!data.success) {
        // if not successful, bind errors to error variables
        $scope.errorName = data.errors.name;
        $scope.errorSuperhero = data.errors.superheroAlias;
      } else {
        // if successful, bind success message to message
        $scope.message = data.message;
      }
    });
    $uibModalInstance.close($scope.signup);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
