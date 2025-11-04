// size: 502 (min) 251 (brotli)
_._resume_dynamic_tag();
const $tagselect_content__setup__script = _._script("a1", ($scope) => {
    (_._attrs_script($scope, "a"),
      _._attrs_script($scope, "b"),
      _._attrs_script($scope, "c"));
  }),
  $tagselect_content = _._content_resume(
    "a2",
    "<option>A</option><option>B</option><option>C</option>",
    " b b b",
    ($scope) => {
      (_._attrs($scope, "a", { value: "a" }),
        _._attrs($scope, "b", { value: "b" }),
        _._attrs($scope, "c", { value: "c" }),
        $tagselect_content__setup__script($scope));
    },
  ),
  $dynamicTag = _._dynamic_tag(0, $tagselect_content),
  $value__OR__tag = _._or(4, ($scope) =>
    $dynamicTag($scope, $scope.d ? "select" : {}, () => ({
      value: $scope.c,
      valueChange: $valueChange($scope),
    })),
  ),
  $value = _._let(2, ($scope) => {
    (_._text($scope.b, $scope.c), $value__OR__tag($scope));
  });
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
(_._resume("a0", $valueChange), init());
