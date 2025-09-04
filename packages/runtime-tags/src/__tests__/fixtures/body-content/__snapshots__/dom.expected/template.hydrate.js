// size: 434 (min) 260 (brotli)
const $attrs__script = _._script("a0", ($scope) => _._attrs_script($scope, 0)),
  $attrs = _._const(5, ($scope, attrs) => {
    (_._attrs($scope, 0, attrs), $attrs__script($scope));
  }),
  $dynamicTag = _._dynamic_tag(1),
  $content = _._const(4, $dynamicTag),
  $input = _._const(3, ($scope, input) => {
    ((({ content: content, ...attrs }) => {
      $attrs($scope, attrs);
    })(input),
      $content($scope, input.content));
  }),
  $FancyButton_content__clickCount = _._closure_get(1, ($scope, clickCount) =>
    _._text($scope[0], clickCount),
  ),
  $FancyButton_content__setup = $FancyButton_content__clickCount,
  $FancyButton_content = _._content_resume(
    "b1",
    " ",
    " b",
    $FancyButton_content__setup,
  ),
  $clickCount__closure = _._closure($FancyButton_content__clickCount),
  $clickCount = _._let(1, ($scope, clickCount) => {
    ($input($scope[0], {
      onClick: $onClick($scope),
      content: $FancyButton_content($scope),
    }),
      $clickCount__closure($scope));
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_._resume("b0", $onClick), init());
