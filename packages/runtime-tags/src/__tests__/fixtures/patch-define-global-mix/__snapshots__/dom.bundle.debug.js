// template.marko
const $Badge_content__walks = "D l";
const $Badge_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Badge_content__walks);
const $Badge_content__input_value__$global_flag = /*@__PURE__*/ _fill_global_join("__tests__/template.marko_1_$global_flag#0:8_input_value#3", ($scope) => _text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag")), "flag");
const $Badge_content__input_value = /*@__PURE__*/ _const("input_value", $Badge_content__input_value__$global_flag);
const $Badge_content__$params = ($scope, $params2) => $Badge_content__input($scope, $params2[0]);
const $Badge_content__input = ($scope, input) => $Badge_content__input_value($scope, input.value);
const $count = _let("count/2", ($scope) => $Badge_content__input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
