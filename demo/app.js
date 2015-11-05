'use strict';

angular.module('multiSliderDemo', ['angularMultiSlider', 'ngAnimate', 'ui.bootstrap']);

angular.module('multiSliderDemo')
  .controller('DemoCtrl', function ($rootScope, $scope, $uibModal) {
    $scope.slider = [{title:'Solo: ',value:200}];

    $scope.sliders = [
      {title:'Weight: ',value:100},
      {title:'File: ',value:200},
      {title:'Test: ',value:450},
      {title:'Test: ',value:150}
    ];

    $scope.modalSliders = [
      {title:'Weight: ',value:100},
      {title:'File: ',value:200}
    ];

    $scope.openModal = function() {
      var modalDlg = $uibModal.open({
        templateUrl: 'sliderModal.html',
        controller: function ($scope, $uibModalInstance, sliders) {
          //Copy of the object in order to keep original values in $scope.percentages in parent controller.
          $scope.mSliders = angular.copy(sliders);

          $scope.ok = function () {
            $uibModalInstance.close($scope.mSliders);
          };

          $scope.cancel = function () {
            $uibModalInstance.dismiss('Canceled');
          };
        },
        resolve: {
          sliders: function () {
            return $scope.modalSliders;
          }
        }
      });

      modalDlg.result.then(function (updatedSliders) {
        $scope.modalSliders = updatedSliders;
      });
    };
  });
