// fmt.ts
function fn(v) {
	return "f-" + v;
}
function other(v) {
	return "g-" + v;
}

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = ($_) => {};
const $input_alt = ($scope, input_alt) => $input_fmt($scope["#childScope/0"], input_alt ? other : fn);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_alt($scope, input.alt);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/outer.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = ($_) => {};
const $input_label__OR__f = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.f($scope.input_label)));
const $f = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("f/5", $input_label__OR__f));
const $input_fmt = $f;
const $input_label = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__OR__f));
const $input = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "D l", 0, $input);
