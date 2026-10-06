// template.marko
_dynamic_tag_var_resume(0);
_dynamic_tag_var_resume(2);
_dynamic_tag_var_resume(4);
const $labelspan_content__setup = ($scope) => {
	_return($scope, 1);
};
const $labelspan_content = /*@__PURE__*/ _content("a2", 0, 0, $labelspan_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content("a0", "content"), () => $btn);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2, $labelspan_content, () => $value);
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag(4, 0, () => $other);
const $label = /*@__PURE__*/ _let(11, ($scope) => {
	_attr_input_value_default($scope, "j", $scope.l);
	$dynamicTag($scope, $scope.l && "button", () => ({ "aria-label": $scope.l }));
	$dynamicTag2($scope, $scope.l && "span");
	$dynamicTag3($scope, !$scope.l && "span");
});
const $setup__script = _script("a5", ($scope) => _on($scope.k, "click", function() {
	$label($scope, $scope.l ? "" : "Close");
}));
const $btn = _var_resume("a1", ($scope, btn) => _text($scope.g, typeof btn));
const $value = _var_resume("a3", ($scope, value) => _text($scope.h, typeof value));
const $other = _var_resume("a4", ($scope, other) => _text($scope.i, typeof other));
