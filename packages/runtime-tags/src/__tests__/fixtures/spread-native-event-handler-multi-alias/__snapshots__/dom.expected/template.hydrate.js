// size: 367 (min) 176 (brotli)
(_._content_resume(`a2`, `Click Me`, `b`),
  _._script(`a3`, ($scope) =>
    _._on($scope.a, `click`, function () {
      ((document.getElementById(`el`).textContent += `[onClick(child)]`),
        $scope.d());
    }),
  ),
  _._script(`a4`, ($scope) => _._attrs_script($scope, `a`)));
function $onClick() {
  document.getElementById(`el`).textContent += `[onClick(parent)]`;
}
function $onclick() {
  throw Error(`Should never be called.`);
}
(_._resume(`a1`, $onClick), _._resume(`a0`, $onclick), init());
