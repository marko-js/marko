// template.marko
_resume_dynamic_tag();
const $tagselect_content__setup__script = _script("a2", ($scope) => {
	_attrs_script($scope, "a");
	_attrs_script($scope, "b");
	_attrs_script($scope, "c");
});
const $tagselect_content__setup = ($scope) => {
	_attrs($scope, "a", { value: "a" });
	_attrs($scope, "b", { value: "b" });
	_attrs($scope, "c", { value: "c" });
	$tagselect_content__setup__script($scope);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a1", "<option>A</option><option>B</option><option>C</option>", " b b b", $tagselect_content__setup));
const $value__OR__tag = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.d ? "select" : {}, () => ({
	value: $scope.c,
	valueChange: $valueChange($scope)
})));
const $value = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$value__OR__tag($scope);
});
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("a0", $valueChange);
