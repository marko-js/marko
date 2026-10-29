// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_label__OR__f = /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:5_f#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.f($scope._.input_label)));
const $if_content__input_label$1 = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__f);
const $if_content__setup$1 = ($scope) => {
	$if_content__input_label$1._($scope);
	$if_content__f._($scope);
};
const $if_content__f = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__f);
const $f = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("f/6", $if_content__f));
const $input_fmt = $f;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup$1);
const $input_more$1 = ($scope, input_more) => $if$1($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_more$1($scope, input.more);
	$input_label$1($scope, input.label);
};
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $if_content__input_label$1));
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_alt__OR__plain__OR__loud = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_alt", /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_alt#0:4_plain#0:7_loud#0:8/init", 1, ($scope) => $input_fmt($scope["#childScope/0"], $scope._.input_alt ? $scope._.loud : $scope._.plain), 2), "#text/0", 0);
const $if_content__input_alt = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_alt__OR__plain__OR__loud);
const $if_content__setup = ($scope) => {
	$if_content__input_alt._($scope);
	$if_content__input_label._($scope);
	$if_content__input_more._($scope);
	$if_content__plain._($scope);
	$if_content__loud._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__input_more = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_more#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill2", "input_more", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_more$1($scope["#childScope/0"], $scope._.input_more))));
const $if_content__plain = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_alt__OR__plain__OR__loud);
const $if_content__loud = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_alt__OR__plain__OR__loud);
const $plain2 = /*@__PURE__*/ _const("plain");
const $loud2 = /*@__PURE__*/ _const("loud");
function $setup($scope) {
	$plain2($scope, $plain);
	$loud2($scope, $loud);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_alt($scope, input.alt);
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
const $input_alt = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_alt", $if_content__input_alt);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $if_content__input_label);
const $input_more = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_more", $if_content__input_more);
function $plain(v) {
	return "p-" + v;
}
function $loud(v) {
	return "l-" + v;
}
_resumed["__tests__/template.marko_0/plain"] = $plain;
_resumed["__tests__/template.marko_0/loud"] = $loud;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
