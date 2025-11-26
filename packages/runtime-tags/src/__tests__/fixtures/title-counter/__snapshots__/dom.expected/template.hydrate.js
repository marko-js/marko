// size: 196 (min) 135 (brotli)
_._content_resume("a0");
const $count__script = _._script("a1", ($scope) => {
    (_._on($scope.a, "click", function () {
      $count($scope, $scope.c + 1);
    }),
      $scope.c,
      ($scope.b.textContent = document.title));
  }),
  $count = _._let(2, ($scope) => {
    (_._title(`Count is ${_._to_text($scope.c)}`), $count__script($scope));
  });
init();
