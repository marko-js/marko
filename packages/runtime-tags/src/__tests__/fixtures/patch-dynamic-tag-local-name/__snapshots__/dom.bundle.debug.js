// tags/alpha.marko
const $template$3 = "<i>A <!></i>";
const $walks$3 = "Db%l";
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/tags/alpha.marko_0_$global_brand#2/global", ($scope) => {
	_text($scope["#text/0"], $scope.$global.brand);
});
function $setup$3($scope) {
	$global_brand($scope);
}
var alpha_default = /*@__PURE__*/ _template("__tests__/tags/alpha.marko", $template$3, $walks$3, $setup$3);

// tags/beta.marko
const $template$2 = "<b>B</b>";
const $walks$2 = "b";
const $setup$2 = () => {};
var beta_default = /*@__PURE__*/ _template("__tests__/tags/beta.marko", $template$2, "b");

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Tag = $dynamicTag;
const $input_value = ($scope, input_value) => $Tag($scope, input_value % 2 ? alpha_default : beta_default);
const $input$1 = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main><h1> </h1><button>+</button>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l b/${_w0}&l`)("b%c");
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/6", ($scope) => $input_value($scope["#childScope/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 1);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
