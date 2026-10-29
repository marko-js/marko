// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label__OR__f = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.f($scope.input_label)));
const $f = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("f/5", $input_label__OR__f));
const $input_fmt = $f;
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__OR__f));
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = ($_) => {};
const $fn2 = ($scope, fn) => $input_fmt($scope["#childScope/0"], fn);
const $input_prefix = /*@__PURE__*/ _const("input_prefix", ($scope) => $fn2($scope, $fn($scope)));
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_prefix($scope, input.prefix);
	$input_label($scope, input.label);
};
const $fn = ($scope) => (v) => $scope.input_prefix + v;
_bind_resume("__tests__/template.marko_0/fn input_prefix", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
