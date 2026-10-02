// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $inputdyn_content__if = /*@__PURE__*/ _if("#text/0", "y");
const $inputdyn_content__setup = ($scope) => $inputdyn_content__if($scope, $getLabel_getter($scope._._) ? 0 : 1);
const $inputdyn_content = _content("__tests__/template.marko_3*content", "<!><!><!>", "b%", $inputdyn_content__setup);
const $getLabel_getter = _hoist_resume("__tests__/template.marko_0_getLabel#2:0/hoist", "getLabel", "BranchScopes:#text/0");
const $if_content__getLabel = /*@__PURE__*/ _const("getLabel", ($scope) => _assert_hoist($scope.getLabel));
const $if_content__setup = ($scope) => $if_content__getLabel($scope, $getLabel);
const $else_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputdyn_content);
const $else_content__input_dyn__OR__count = /*@__PURE__*/ _or(4, ($scope) => $else_content__dynamicTag($scope, $scope._.input_dyn, () => ({ count: $scope.count })));
const $else_content__input_dyn = /*@__PURE__*/ _if_closure("#text/0", 1, $else_content__input_dyn__OR__count);
const $else_content__count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$else_content__input_dyn__OR__count($scope);
});
const $else_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$else_content__count($scope, +$scope.count + 1);
}));
const $else_content__setup = ($scope) => {
	$else_content__input_dyn._($scope);
	$else_content__count($scope, 0);
	$else_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content__setup, "<button> </button><!><!>", " D l%", $else_content__setup);
const $input_a = ($scope, input_a) => $if($scope, input_a ? 0 : 1);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_dyn($scope, input.dyn);
};
const $input_dyn = /*@__PURE__*/ _const("input_dyn", $else_content__input_dyn);
function $getLabel() {
	return "a";
}
_resumed["__tests__/template.marko_2/getLabel"] = $getLabel;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
