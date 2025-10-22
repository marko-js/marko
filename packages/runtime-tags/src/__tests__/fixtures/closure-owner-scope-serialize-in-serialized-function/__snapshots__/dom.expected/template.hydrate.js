// size: 151 (min) 107 (brotli)
(_._script("a2", ({ 1: run }) => run()),
  _._resume("a1", function ($scope, { _: { 1: text } } = $scope) {
    return function () {
      $scope[0].innerHTML = text();
    };
  }),
  _._resume("a0", function () {
    return "HI";
  }),
  init());
