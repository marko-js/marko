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
const $template$1 = "<!><!><!><button class=toggle>toggle</button>";
const $walks$1 = "b%b%b b";
const $if_content2__fmt__OR__label = /*@__PURE__*/ _fill_join_if("__tests__/tags/rowsx.marko_fill4/unpatched", "label", /*@__PURE__*/ _fill_join_if("__tests__/tags/rowsx.marko_fill3/unpatched", "fmt", /*@__PURE__*/ _or_resume("__tests__/tags/rowsx.marko_4_fmt#3:4_label#3:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._.fmt($scope._.label))), "#text/0", 0), "#text/0", 0);
const $if_content2__fmt = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__fmt__OR__label);
const $if_content2__setup = ($scope) => {
	$if_content2__fmt._($scope);
	$if_content2__label._($scope);
};
const $if_content2__label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__fmt__OR__label);
const $Panel_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_fmt = /*@__PURE__*/ _const("fmt", $if_content2__fmt);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const("label", $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_fmt($scope, $temp.fmt);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $if_content__input_label = /*@__PURE__*/ _fill_join("__tests__/tags/rowsx.marko_fill1 __tests__/tags/rowsx.marko_fill1/unpatched", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label)));
const $if_content__setup$1 = $if_content__input_label;
const $for_content__input_open = /*@__PURE__*/ _init_resume("__tests__/tags/rowsx.marko_1_input_open#0:6/init", /*@__PURE__*/ _fill_join("__tests__/tags/rowsx.marko_fill0", "input_open", /*@__PURE__*/ _for_closure("#text/0", ($scope) => {
	$Panel_content__tag_input_fmt($scope["#childScope/0"], lib.format);
	$Panel_content__isOpen($scope["#childScope/0"], $scope._.input_open);
})));
const $for_content__setup = ($scope) => {
	$for_content__input_open._($scope);
	$for_content__input_label._($scope);
	$Panel_content__tag_input_fmt($scope["#childScope/0"], lib.format);
};
const $for_content__input_label__OR__x = /*@__PURE__*/ _fill_join_for("__tests__/tags/rowsx.marko_fill1/unpatched | __tests__/tags/rowsx.marko_fill1", "input_label", /*@__PURE__*/ _or_resume("__tests__/tags/rowsx.marko_1_input_label#0:7_x#2/init", 3, ($scope) => {
	$Panel_content__tag_input_fmt($scope["#childScope/0"], lib.format);
	$Panel_content__tag_input_label($scope["#childScope/0"], $scope._.input_label + $scope.x);
}), "#text/0");
const $for_content__input_label = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_label__OR__x);
const $for_content__x = /*@__PURE__*/ _const("x", $for_content__input_label__OR__x);
const $for_content__$params = ($scope, $params3) => $for_content__x($scope, $params3[0]);
const $if$1 = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/rowsx.marko_fill2", "open/8", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/rowsx.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_open$1($scope, input.open);
	$input_label($scope, input.label);
};
const $input_open$1 = /*@__PURE__*/ _fill_const("__tests__/tags/rowsx.marko_fill0", "input_open", $for_content__input_open);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/rowsx.marko_fill1", "input_label", ($scope) => {
	$if_content__input_label($scope);
	$for_content__input_label($scope);
}, /*@__PURE__*/ _fill_mark("input_label", $if_content__input_label));
var rowsx_default = /*@__PURE__*/ _template("__tests__/tags/rowsx.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $if_content__input_open = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_open#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_open", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_open$1($scope["#childScope/0"], $scope._.input_open))));
const $if_content__setup = ($scope) => {
	$if_content__input_open._($scope);
	$if_content__input_items._($scope);
	$if_content__l._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_items = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_items#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_items", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items$1($scope["#childScope/0"], $scope._.input_items))));
const $if_content__l = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_l#0:7/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.l)));
const $l = _let("l/7", $if_content__l);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$l($scope, $scope.l + "!");
}));
function $setup($scope) {
	$l($scope, "a");
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_open($scope, input.open);
	$input_items($scope, input.items);
};
const $input_open = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_open", $if_content__input_open);
const $input_items = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_items", $if_content__input_items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
