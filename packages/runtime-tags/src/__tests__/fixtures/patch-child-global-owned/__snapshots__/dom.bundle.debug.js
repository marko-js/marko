// tags/g-badge/index.marko
const $template$1 = "<p><!> <!></p>";
const $walks$1 = "D%c%l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $global_flag = /*@__PURE__*/ _fill_global_join("flag", "__tests__/tags/g-badge/index.marko_0_$global_flag#6/global", ($scope) => {
	_text($scope["#text/1"], $scope.$global.flag);
});
const $input = ($scope, input) => $input_value($scope, input.value);
function $setup$1($scope) {
	$global_flag($scope);
}
var g_badge_default = /*@__PURE__*/ _template("__tests__/tags/g-badge/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/2", ($scope) => $input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
