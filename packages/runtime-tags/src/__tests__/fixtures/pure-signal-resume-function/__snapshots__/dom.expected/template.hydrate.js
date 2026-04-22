// size: 150 (min) 108 (brotli)
(_._script(`a0`, ($scope) => _._attrs_script($scope, `a`)),
  _._content_resume(`b1`, `Click`, `b`));
function $onClick($scope) {
  return function () {
    console.log($scope.b);
  };
}
(_._resume(`b0`, $onClick), init());
