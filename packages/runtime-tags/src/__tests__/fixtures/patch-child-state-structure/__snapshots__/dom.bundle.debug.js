// tags/toggle-panel/index.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $if = /*@__PURE__*/ _if("#div/0", "<em>on</em>");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var toggle_panel_default = /*@__PURE__*/ _template("__tests__/tags/toggle-panel/index.marko", $template$1, " b", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)(" b");
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $input_show($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
