// template.marko
const $Badge_content__walks = "D l";
const $Badge_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Badge_content__walks);
const $Badge_content__$global_flag__OR__input_value = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag")));
const $Badge_content__$global_flag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_$global_flag#0:8/subscribe", "$global_flag/3", $Badge_content__$global_flag__OR__input_value);
const $Badge_content__setup = $Badge_content__$global_flag;
const $Badge_content__input_value = /*@__PURE__*/ _const("input_value", $Badge_content__$global_flag__OR__input_value);
const $Badge_content__$params = ($scope, $params2) => $Badge_content__input($scope, $params2[0]);
const $Badge_content__input = ($scope, input) => $Badge_content__input_value($scope, input.value);
const $count = _let("count/2", ($scope) => $Badge_content__input_value($scope["#childScope/0"], $scope.count));
const $global_flag__closure = /*@__PURE__*/ _closure($Badge_content__$global_flag);
const $global_flag = _fill_global_resume("__tests__/template.marko_0_$global_flag#8/subscribe", $global_flag__closure, "flag");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Badge_content__setup($scope["#childScope/0"]);
	$count($scope, 0);
	$setup__script($scope);
	$global_flag($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
