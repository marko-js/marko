// template.marko
const $Badge_content__walks = "D l";
const $Badge_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($Badge_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($Badge_content__walks);
const $Badge_content__input_value__OR__$global_flag = /*@__PURE__*/ _fill_global_join("flag", "__tests__/template.marko_1_input_value#3_$global_flag#5/global", ($scope) => {
	_text($scope["#text/0"], $scope.input_value + _global_read($scope.$global, "flag"));
});
const $Badge_content__input_value = /*@__PURE__*/ _const("input_value", $Badge_content__input_value__OR__$global_flag);
const $Badge_content__$params = ($scope, $params2) => $Badge_content__input($scope, $params2[0]);
const $Badge_content__input = ($scope, input) => $Badge_content__input_value($scope, input.value);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/2", ($scope) => $Badge_content__input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
