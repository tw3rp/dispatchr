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

angular.module('marketApp').controller('loginCtrl',['$scope','$http','$uibModalInstance','$location',function ($scope,$http, $uibModalInstance,$location) {


  $scope.ok = function () {
  
    $http({
      method  : 'POST',
      url     : '/login',
      data    : $scope.login,  
      headers : { 'Content-Type': 'application/json' }  
    })
    .success(function(data) {
      

      if (data.message) {
        // if not successful, bind errors to error variables
        $scope.errors = data.message[0];
        
      } else {
        // if successful, bind success message to message
         $location.path('/').replace();
         $uibModalInstance.close($scope.login);
      }
    });
   
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
angular.module('marketApp').controller('signupCtrl',['$scope','$http','$uibModalInstance','$location',function ($scope,$http, $uibModalInstance,$location) {


  $scope.ok = function () {
  
    $http({
      method  : 'POST',
      url     : '/signup',
      data    : $scope.signup,  // pass in data as strings
      headers : { 'Content-Type': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {
      

      if (data.message) {
        // if not successful, bind errors to error variables
        $scope.errors = data.message[0]
      } else {
        // if successful, bind success message to message
        $location.path('/').replace();
        $uibModalInstance.close($scope.signup);
      }
    });
    
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);
