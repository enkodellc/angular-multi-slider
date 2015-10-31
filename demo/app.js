'use strict';

angular.module('multiSliderDemo', ['angularMultiSlider']);

angular.module('multiSliderDemo')
  .controller('DemoCtrl', function ($scope) {
    $scope.slider = [{title:'Solo: ',value:200}];

    $scope.sliders = [
      {title:'Weight: ',value:100},
      {title:'File: ',value:200},
      {title:'Test: ',value:450},
      {title:'Test: ',value:150}
    ];
  });
