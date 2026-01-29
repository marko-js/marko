// size: 376 (min) 238 (brotli)
_._resume_dynamic_tag();
_._content_resume("a1", "<!> <!>", "b/ b&b", ($scope) => {
  ($Message_content__input_before($scope.a, "hello"),
    $Message_content__input_after($scope.a, "world"));
});
const $Message_content__input_before__OR__input_after = _._or(5, ($scope) =>
    _._text($scope.a, $scope.d + $scope.e),
  ),
  $Message_content__input_before = _._const(
    3,
    $Message_content__input_before__OR__input_after,
  ),
  $Message_content__input_after = _._const(
    4,
    $Message_content__input_before__OR__input_after,
  ),
  $Wrap_content__dynamicTag = _._dynamic_tag(0),
  $Wrap_content__as__OR__onClick__OR__content = _._or(
    6,
    ($scope) =>
      $Wrap_content__dynamicTag($scope, $scope.d, () => ({
        onClick: $scope.e,
        content: $scope.f,
      })),
    2,
  ),
  $Wrap_content__onClick = _._const(
    4,
    $Wrap_content__as__OR__onClick__OR__content,
  ),
  $x = _._let(1, ($scope) =>
    $Wrap_content__onClick($scope.a, $onClick($scope)),
  );
function $onClick($scope) {
  return function () {
    console.log($x($scope, $scope.b + 1) - 1);
  };
}
(_._resume("a0", $onClick), init());
