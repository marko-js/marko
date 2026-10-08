// tags/greet/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $global_locale = /*@__PURE__*/ _fill_global_join("locale", "__tests__/tags/greet/index.marko_0_$global_locale#5/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.locale);
});
const $double = /*@__PURE__*/ _const("double", ($scope) => _return($scope, $scope.double));
const $input_n = ($scope, input_n) => $double($scope, input_n * 2);
const $input = ($scope, input) => $input_n($scope, input.n);
function $setup$1($scope) {
	$global_locale($scope);
}
var greet_default = /*@__PURE__*/ _template("__tests__/tags/greet/index.marko", $template$1, "D l", /*@__PURE__*/ _return_setup($setup$1), $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D l l`)("D l");
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/4", ($scope) => $input_n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $d);
	$setup$1($scope["#childScope/0"]);
	$setup__script($scope);
	$count($scope, 1);
}
const $d = _var_resume("__tests__/template.marko_0_d#5/var", ($scope, d) => _text($scope["#text/2"], d));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
