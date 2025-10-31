// size: 438 (min) 262 (brotli)
const $attrs__script = _._script("a0", ($scope) => _._attrs_script($scope, 0)),
  $attrs = _._const(5, ($scope) => {
    (_._attrs($scope, 0, $scope[5]), $attrs__script($scope));
  }),
  $dynamicTag = _._dynamic_tag(1),
  $content = _._const(4, ($scope) => $dynamicTag($scope, $scope[4])),
  $input = _._const(3, ($scope) => {
    ((({ content: content, ...attrs }) => {
      $attrs($scope, attrs);
    })($scope[3]),
      $content($scope, $scope[3].content));
  }),
  $FancyButton_content__clickCount = _._closure_get(1, ($scope) =>
    _._text($scope[0], $scope._[1]),
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
    ($input($scope[0], {
      onClick: $onClick($scope),
      content: $FancyButton_content($scope),
    }),
      $clickCount__closure($scope));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope[1] + 1);
  };
}
(_._resume("b0", $onClick), init());
