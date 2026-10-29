// tags/lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/rowsx.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks);
const $if_content__fmt__OR__label = /*@__PURE__*/ _fill_join_if("__tests__/tags/rowsx.marko_fill1/unpatched", "label", /*@__PURE__*/ _fill_join_if("__tests__/tags/rowsx.marko_fill0/unpatched", "fmt", /*@__PURE__*/ _or_resume("__tests__/tags/rowsx.marko_2_fmt#1:4_label#1:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._.fmt($scope._.label))), "#text/0", 0), "#text/0", 0);
const $if_content__fmt = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__fmt__OR__label);
const $if_content__setup$1 = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__fmt__OR__label);
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup$1);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_fmt = /*@__PURE__*/ _const("fmt", $if_content__fmt);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_fmt($scope, $temp.fmt);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $input_open$1 = ($scope, input_open) => $Panel_content__isOpen($scope["#childScope/0"], input_open);
function $setup$1($scope) {
	$Panel_content__tag_input_fmt($scope["#childScope/0"], $fmt);
}
const $input_label = ($scope, input_label) => $Panel_content__tag_input_label($scope["#childScope/0"], input_label + "1");
const $input$1 = ($scope, input) => {
	$input_open$1($scope, input.open);
	$input_label($scope, input.label);
};
function $fmt(v) {
	return lib.format(v);
}
_resumed["__tests__/tags/rowsx.marko_0/fmt"] = $fmt;
var rowsx_default = /*@__PURE__*/ _template("__tests__/tags/rowsx.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_open#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_open", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_open$1($scope["#childScope/0"], $scope._.input_open))));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__l._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__l = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_l#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.l)));
const $l = _let("l/6", $if_content__l);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$l($scope, $scope.l + "!");
}));
function $setup($scope) {
	$l($scope, "a");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_open($scope, input.open);
};
const $input_open = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_open", $if_content__input_open);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
