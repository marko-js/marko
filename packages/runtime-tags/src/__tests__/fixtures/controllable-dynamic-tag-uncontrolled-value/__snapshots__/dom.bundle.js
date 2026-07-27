// template.marko
_enable_controllable();
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a0", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>"));
const $tag__OR__pick = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.c, () => ({ value: $scope.d })));
const $pick = /*@__PURE__*/ _let(3, $tag__OR__pick);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$pick($scope, "c");
}));
