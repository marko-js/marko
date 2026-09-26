// tags/wrap.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_row__OR__input_label = /*@__PURE__*/ _fill_join_if("__tests__/tags/wrap.marko1", "input_label", /*@__PURE__*/ _fill_join_if("__tests__/tags/wrap.marko0", "input_row", /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.input_row, () => ({ label: $scope._.input_label }))), 0, "#text/1", 0), 0, "#text/1", 0);
const $if_content__input_row = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_row__OR__input_label);
const $if_content__setup$1 = ($scope) => {
	$if_content__input_row._($scope);
	$if_content__input_label$1._($scope);
};
const $if_content__input_label$1 = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_row__OR__input_label);
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/wrap.marko2", "open/6", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/wrap.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input$1 = ($scope, input) => {
	$input_row($scope, input.row);
	$input_label$1($scope, input.label);
};
const $input_row = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko0", "input_row", $if_content__input_row);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko1", "input_label", $if_content__input_label$1);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Row_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $Row_content__$params = ($scope, $params2) => $Row_content__label($scope, ($params2?.[0]).label);
const $Row_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", 0, $Row_content__$params);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__Row._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__Row = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_row($scope["#childScope/0"], $scope._.Row));
const $Row = /*@__PURE__*/ _const("Row");
function $setup($scope) {
	$Row($scope, { content: $Row_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
