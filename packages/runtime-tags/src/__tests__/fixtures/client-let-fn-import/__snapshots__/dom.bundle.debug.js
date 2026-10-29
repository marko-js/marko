// fmt.ts
function fn(v) {
	return "f-" + v;
}

// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label__OR__f = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.f($scope.input_label)));
const $f = /*@__PURE__*/ _let("f/5", $input_label__OR__f);
const $input_fmt = $f;
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__f);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
function $setup($scope) {
	$input_fmt($scope["#childScope/0"], fn);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
