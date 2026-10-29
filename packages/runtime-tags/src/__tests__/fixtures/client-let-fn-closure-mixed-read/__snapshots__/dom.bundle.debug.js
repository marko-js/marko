// tags/outer.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = ($_) => {};
const $if_content__g = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.g("constant")));
const $if_content__setup = $if_content__g;
const $input_label__OR__g = /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/0"], $scope.g($scope.input_label)));
const $g2 = /*@__PURE__*/ _const("g", $input_label__OR__g);
const $f = /*@__PURE__*/ _let("f/7", ($scope) => $g2($scope, $g($scope)));
const $input_fmt = $f;
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__g);
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $input_more$1 = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
	$input_more$1($scope, input.more);
};
const $g = ($scope) => (v) => $scope.f(v);
_resumed["__tests__/tags/outer.marko_0/g"] = $g;
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $fn2 = ($scope, fn) => $input_fmt($scope["#childScope/0"], fn);
function $setup($scope) {
	$fn2($scope, $fn);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
function $fn(v) {
	return "f-" + v;
}
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
