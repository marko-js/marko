// template.marko
const $inputdyn_content__if = /*@__PURE__*/ _if(0, "y");
const $inputdyn_content__setup = ($scope) => $inputdyn_content__if($scope, $getLabel_getter($scope._._) ? 0 : 1);
const $inputdyn_content = _content("a2", "<!><!><!>", "b%", $inputdyn_content__setup);
const $getLabel_getter = _hoist_resume("a1", 0, "Aa");
const $else_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(2, $inputdyn_content);
const $else_content__input_dyn__OR__count = /*@__PURE__*/ _or(4, ($scope) => $else_content__dynamicTag($scope, $scope._.e, () => ({ count: $scope.d })));
const $else_content__count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$else_content__input_dyn__OR__count($scope);
});
const $else_content__setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$else_content__count($scope, +$scope.d + 1);
}));
function $getLabel() {
	return "a";
}
_resumed.a0 = $getLabel;
