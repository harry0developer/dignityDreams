angular.module('dignitydreams.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { img:"vodacom.jpg" ,title: 'Vodacom', content:'Vodacom graduates develop an app for dignity dreams', id: 1 },
    { img: "pnp.png",title: 'PnP', content:'PnP donates food for children', id: 2 },
    { img: "first.jpg",title: '!st for Women', content:'!st for Women contributed large amount of Sanitary pads, food and underwears', id: 3 },
    { img: "ionic.png",title: 'High School',content:'High school tenagers learn about pregnancy', id: 4 },
    { img: "facebook.png",title: 'Facebook',content:'Dignity dreams reaches 10000 followers on facebook', id: 5 },
    { img: "facebook.png",title: 'Sanitary pads' ,content:'Pads in demand at seondary schools', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
