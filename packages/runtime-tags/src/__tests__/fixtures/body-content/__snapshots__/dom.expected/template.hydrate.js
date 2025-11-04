// size: 434 (min) 255 (brotli)
const $attrs__script = _._script("a0", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $attrs = _._const(5, ($scope) => {
    (_._attrs($scope, "a", $scope.f), $attrs__script($scope));
  }),
  $dynamicTag = _._dynamic_tag(1),
  $content = _._const(4, ($scope) => $dynamicTag($scope, $scope.e)),
  $input = _._const(3, ($scope) => {
    ((({ content: content, ...attrs }) => {
      $attrs($scope, attrs);
    })($scope.d),
      $content($scope, $scope.d.content));
  }),
  $FancyButton_content__clickCount = _._closure_get(1, ($scope) =>
    _._text($scope.a, $scope._.b),
  ),
  $FancyButton_content__setup = $FancyButton_content__clickCount,
  $FancyButton_content = _._content_resume(
    "b1",
    " ",
    " b",
    $FancyButton_content__setup,
  ),
  $clickCount__closure = _._closure($FancyButton_content__clickCount),
  $clickCount = _._let(1, ($scope) => {
    ($input($scope.a, {
      onClick: $onClick($scope),
      content: $FancyButton_content($scope),
    }),
      $clickCount__closure($scope));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.b + 1);
  };
}
(_._resume("b0", $onClick), init());
