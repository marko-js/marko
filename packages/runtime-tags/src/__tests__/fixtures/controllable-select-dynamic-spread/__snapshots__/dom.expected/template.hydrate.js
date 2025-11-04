// size: 494 (min) 238 (brotli)
_._resume_dynamic_tag();
const $tagselect_content__setup__script = _._script("a1", ($scope) => {
    (_._attrs_script($scope, 0),
      _._attrs_script($scope, 1),
      _._attrs_script($scope, 2));
  }),
  $tagselect_content = _._content_resume(
    "a2",
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
  $value__OR__tag = _._or(4, ($scope) =>
    $dynamicTag($scope, $scope[3] ? "select" : {}, () => ({
      value: $scope[2],
      valueChange: $valueChange($scope),
    })),
  ),
  $value = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2]), $value__OR__tag($scope));
  });
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_._resume("a0", $valueChange), init());
