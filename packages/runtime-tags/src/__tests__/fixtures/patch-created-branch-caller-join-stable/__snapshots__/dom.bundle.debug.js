// tags/inner.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_label__OR__v = /*@__PURE__*/ _or_patch("__tests__/tags/inner.marko_1_input_label#0:4_v#1/setup", 2, ($scope) => _text($scope["#text/0"], $scope.v + $scope._.input_label));
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/tags/inner.marko_1_input_label#0:4/setup", "#text/0", 0, $if_content__input_label__OR__v);
const $if_content__v = /*@__PURE__*/ _const("v", $if_content__input_label__OR__v);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__v($scope, "v");
};
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>label</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $label = _let("label/5", ($scope) => $input_label($scope["#childScope/1"], $scope.label));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$label($scope, $scope.label + "!");
}));
function $setup($scope) {
	$label($scope, "a");
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
