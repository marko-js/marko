// size: 482 (min) 249 (brotli)
const $tagselect_content__setup__script = _._script("a2", ($scope) => {
    (_._attrs_script($scope, 0),
      _._attrs_script($scope, 1),
      _._attrs_script($scope, 2));
  }),
  $tagselect_content = _._content_resume(
    "a1",
    "<option>A</option><option>B</option><option>C</option>",
    " b b b",
    ($scope) => {
      (_._attrs($scope, 0, { value: "a" }),
        _._attrs($scope, 1, { value: "b" }),
        _._attrs($scope, 2, { value: "c" }),
        $tagselect_content__setup__script($scope));
    },
  ),
  $dynamicTag = _._dynamic_tag(0, $tagselect_content),
  $value__OR__tag = _._or(4, ($scope) => {
    let { 2: value, 3: tag } = $scope;
    $dynamicTag($scope, tag ? "select" : {}, () => ({
      value: value,
      valueChange: $valueChange($scope),
    }));
  }),
  $value = _._let(2, ($scope, value) => {
    (_._text($scope[1], value), $value__OR__tag($scope));
  });
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_._resume("a0", $valueChange), init());
