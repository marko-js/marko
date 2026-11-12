// template.marko
const $Badge_content__walks = "D l";
const $Badge_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Badge_content__walks);
const $global_flag_key = /*@__PURE__*/ _global_key("$global_flag/4", "flag");
const $Badge_content__$global_flag = /*@__PURE__*/ _global_closure("__tests__/template.marko_1_$global_flag#0:8/subscribe", $global_flag_key);
const $Badge_content__$global_flag__OR__input_value = /*@__PURE__*/ _global_or(4, ($scope) => _text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag")), $Badge_content__$global_flag);
const $Badge_content__input_value = /*@__PURE__*/ _const("input_value", $Badge_content__$global_flag__OR__input_value);
const $Badge_content__setup = $Badge_content__$global_flag;
const $Badge_content__$params = ($scope, $params2) => $Badge_content__input($scope, $params2[0]);
const $Badge_content__input = ($scope, input) => $Badge_content__input_value($scope, input.value);
const $count = _let("count/2", ($scope) => $Badge_content__input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$Badge_content__setup($scope["#childScope/0"]);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
