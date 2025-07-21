// size: 437 (min) 247 (brotli)
const $attrs_effect = _$.effect("a0", ($scope) => _$.attrsEvents($scope, 0)),
  $attrs = _$.value(5, ($scope, attrs) => {
    (_$.attrs($scope, 0, attrs), $attrs_effect($scope));
  }),
  $dynamicTag = _$.dynamicTag(1),
  $content = _$.value(4, $dynamicTag),
  $input = _$.value(3, ($scope, input) => {
    ((({ content: content, ...attrs }) => {
      $attrs($scope, attrs);
    })(input),
      $content($scope, input.content));
  }),
  $clickCount$FancyButton$content = _$.dynamicClosureRead(
    1,
    ($scope, clickCount) => _$.data($scope[0], clickCount),
  ),
  $setup$FancyButton$content = $clickCount$FancyButton$content,
  $FancyButton_content = _$.registerContent(
    "b1",
    " ",
    " ",
    $setup$FancyButton$content,
  ),
  $clickCount_closure = _$.dynamicClosure($clickCount$FancyButton$content),
  $clickCount = _$.state(1, ($scope, clickCount) => {
    ($input($scope[0], {
      onClick: $onClick($scope),
      content: $FancyButton_content($scope),
    }),
      $clickCount_closure($scope));
  });
function $onClick($scope, { 1: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_$.register("b0", $onClick), init());
