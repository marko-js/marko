// tags/widget/index.marko
const $template$1 = "<button class=c><!>:<!></button>";
const $walks$1 = " D%c%l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/widget/index.marko0", "n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script$1 = _script("__tests__/tags/widget/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<main><!><button class=t>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "fixed");
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
