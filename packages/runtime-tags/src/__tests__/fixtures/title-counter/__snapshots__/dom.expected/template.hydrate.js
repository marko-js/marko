// size: 183 (min) 130 (brotli)
const $count__script = _._script("a0", ($scope) => {
    (_._on($scope.b, "click", function () {
      $count($scope, $scope.d + 1);
    }),
      $scope.d,
      ($scope.c.textContent = document.title));
  }),
  $count = _._let(3, ($scope) => {
    (_._text_content($scope.a, `Count is ${_._to_text($scope.d)}`),
      $count__script($scope));
  });
init();
