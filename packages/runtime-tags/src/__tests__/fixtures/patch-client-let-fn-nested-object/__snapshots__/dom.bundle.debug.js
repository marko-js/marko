// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $obj2 = ($scope, obj2) => $obj2_obj($scope, obj2.obj);
const $obj = ($scope, obj) => $obj2($scope, { obj });
const $f = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("f/5", ($scope) => $obj($scope, { f: $scope.f })));
const $input_fmt = $f;
const $input_label__OR__obj2_obj = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/0"], $scope.obj2_obj.f($scope.input_label)));
const $obj2_obj = /*@__PURE__*/ _const("obj2_obj", $input_label__OR__obj2_obj);
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__OR__obj2_obj));
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $fn2 = ($scope, fn) => $input_fmt($scope["#childScope/0"], fn);
function $setup($scope) {
	$fn2($scope, $fn);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
function $fn(v) {
	return "f-" + v;
}
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
