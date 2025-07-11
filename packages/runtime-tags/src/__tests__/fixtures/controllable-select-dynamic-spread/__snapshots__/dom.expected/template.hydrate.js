// size: 481 (min) 237 (brotli)
const $setup$tagselect$content_effect = _$.effect("a2", ($scope) => {
    (_$.attrsEvents($scope, 0),
      _$.attrsEvents($scope, 1),
      _$.attrsEvents($scope, 2));
  }),
  $tagselect_content = _$.registerContent(
    "a1",
    "<option>A</option><option>B</option><option>C</option>",
    " b b ",
    ($scope) => {
      (_$.attrs($scope, 0, { value: "a" }),
        _$.attrs($scope, 1, { value: "b" }),
        _$.attrs($scope, 2, { value: "c" }),
        $setup$tagselect$content_effect($scope));
    },
  ),
  $dynamicTag = _$.dynamicTag(0, $tagselect_content),
  $expr_value_tag = _$.intersection(4, ($scope) => {
    const { 2: value, 3: tag } = $scope;
    $dynamicTag($scope, tag ? "select" : {}, () => ({
      value: value,
      valueChange: $valueChange($scope),
    }));
  }),
  $value = _$.state(2, ($scope, value) => {
    (_$.data($scope[1], value), $expr_value_tag($scope));
  });
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_$.register("a0", $valueChange), init());
