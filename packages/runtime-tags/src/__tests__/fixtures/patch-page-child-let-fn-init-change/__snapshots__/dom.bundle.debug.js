// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_label__OR__f = /*@__PURE__*/ _fill_join_if("__tests__/tags/outer.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:5_f#0:6/init", 1, ($scope) => "f" in $scope._ && _text($scope["#text/0"], $scope._.f($scope._.input_label))), "#text/0", 0);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__f);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__f._($scope);
};
const $if_content__f = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__f);
const $f = /*@__PURE__*/ _let("f/6", $if_content__f);
const $input_fmt = $f;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_more$1 = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
	$input_more$1($scope, input.more);
};
const $input_label$1 = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $input_alt__OR__plain__OR__loud = /*@__PURE__*/ _or(8, ($scope) => $input_fmt($scope["#childScope/0"], $scope.input_alt ? $scope.loud : $scope.plain), 2);
const $plain2 = /*@__PURE__*/ _const("plain", $input_alt__OR__plain__OR__loud);
const $loud2 = /*@__PURE__*/ _const("loud", $input_alt__OR__plain__OR__loud);
function $setup($scope) {
	$plain2($scope, $plain);
	$loud2($scope, $loud);
}
const $input_alt = /*@__PURE__*/ _const("input_alt", $input_alt__OR__plain__OR__loud);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_alt($scope, input.alt);
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
function $plain(v) {
	return "p-" + v;
}
function $loud(v) {
	return "l-" + v;
}
_resumed["__tests__/template.marko_0/plain"] = $plain;
_resumed["__tests__/template.marko_0/loud"] = $loud;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
