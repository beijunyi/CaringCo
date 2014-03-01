//Authored by http://www.beijunyi.com on 1st March 2014

var HOVER_ITEMS = ['contact-tel', 'contact-website', 'contact-email', 'contact-address'];

app.controller('ContactController', ['$scope', '$timeout', function ($scope, $timeout) {
  var interrupt = false;
  var promise = undefined;

  function item(i) {
    return $('#' + HOVER_ITEMS[i] + ' > td');
  }

  function hover(el) {
    el.addClass('hovered');
  }

  function unhover(el) {
    el.removeClass('hovered');
  }

  function unhoverAll() {
    unhover($('.hovered'));
  }

  function triggerHover(i, fn) {
    return function() {
      if(interrupt)
        return;
      if(i != 0)
        unhover(item(i - 1));
      hover(item(i));
      promise = $timeout(function() {
        fn();
      }, 500);
    }
  }

  function hoverAllFn() {
    promise = undefined;
    var total = HOVER_ITEMS.length;
    var fn = function() {
      unhover(item(HOVER_ITEMS.length - 1));
      resetTimer(3000);
    };
    var innerFn;
    for(var i = total - 1; i >= 0; i--) {
      innerFn = triggerHover(i, fn);
      fn = innerFn;
    }
    fn();
  }


  function resetTimer(delay) {
    promise = $timeout(hoverAllFn, delay);
  }

  $scope.hoverStart = function(event) {
    unhoverAll();
    var el = $(event.target);
    hover(el);
    interrupt = true;
    if(promise)
      $timeout.cancel(promise);
    promise = undefined;
  };

  $scope.hoverEnd = function(event) {
    var el = $(event.target);
    unhover(el);
    interrupt = false;
    resetTimer(2000);
  };

  $scope.$on('$locationChangeStart', function(){
    $timeout.cancel(promise);
  });

  $scope.$on('$destroy', function(){
    $timeout.cancel(promise);
  });

  resetTimer(1000);
}
]);