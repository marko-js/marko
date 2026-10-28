// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// tags/card.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template$1 = "<!><!><!><button class=toggle>toggle</button>";
const $walks$1 = "b%b%b b";
const $if_content3__fmt__OR__label = /*@__PURE__*/ _fill_join_if("__tests__/tags/card.marko_fill4/unpatched", "label", /*@__PURE__*/ _fill_join_if("__tests__/tags/card.marko_fill3/unpatched", "fmt", /*@__PURE__*/ _or_resume("__tests__/tags/card.marko_4_fmt#3:4_label#3:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._.fmt($scope._.label))), "#text/0", 0), "#text/0", 0);
const $if_content3__fmt = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content3__fmt__OR__label);
const $if_content3__setup = ($scope) => {
	$if_content3__fmt._($scope);
	$if_content3__label._($scope);
};
const $if_content3__label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content3__fmt__OR__label);
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content3__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_fmt = /*@__PURE__*/ _const("fmt", $if_content3__fmt);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content3__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_fmt($scope, $temp.fmt);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $if_content2__input_label = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill1 __tests__/tags/card.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label)));
const $if_content2__setup = $if_content2__input_label;
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_open#0:6/init", /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_open", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$Panel_content__tag_input_fmt($scope["#childScope/0"], lib.format);
	$Panel_content__isOpen($scope["#childScope/0"], $scope._.input_open);
})));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__input_label._($scope);
	$Panel_content__tag_input_fmt($scope["#childScope/0"], lib.format);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_label#0:7/init", /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$Panel_content__tag_input_fmt($scope["#childScope/0"], lib.format);
	$Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label);
})));
const $if2 = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content2__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill2", "open/8", ($scope) => $if2($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_open($scope, input.open);
	$input_label$1($scope, input.label);
};
const $input_open = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_open", $if_content__input_open);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill1", "input_label", ($scope) => {
	$if_content2__input_label($scope);
	$if_content__input_label($scope);
}, $if_content2__input_label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=hide>hide</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $shown = _let("shown/7", ($scope) => $input_show$1($scope["#childScope/0"], $scope.shown));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$shown($scope, !$scope.shown);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_open($scope["#childScope/0"], true);
	$setup$1($scope["#childScope/1"]);
	$input_open($scope["#childScope/1"], true);
	$shown($scope, true);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => {
	$input_label$1($scope["#childScope/0"], input_label);
	$input_label$1($scope["#childScope/1"], input_label);
};
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
