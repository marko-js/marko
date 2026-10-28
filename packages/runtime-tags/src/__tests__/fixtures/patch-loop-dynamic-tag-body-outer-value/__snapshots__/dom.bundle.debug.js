// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $inputwrapCarddiv_content__input_suffix = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_suffix#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_suffix", /*@__PURE__*/ _closure_get("input_suffix/7", ($scope) => _text($scope["#text/1"], $scope._._.input_suffix), ($scope) => $scope._._, "__tests__/template.marko_2_input_suffix#0:5/subscribe"), 0));
const $inputwrapCarddiv_content__setup = ($scope) => {
	$inputwrapCarddiv_content__input_suffix($scope);
	$inputwrapCarddiv_content__row_label($scope);
};
const $inputwrapCarddiv_content__row_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_row_label#1:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill2", "row_label", /*@__PURE__*/ _closure_get("row_label/8", ($scope) => _text($scope["#text/0"], $scope._.row_label), 0, "__tests__/template.marko_2_row_label#1:3/subscribe"), 0));
const $inputwrapCarddiv_content = _content("__tests__/template.marko_2*content", "<b><!><!></b>", "D%b%", $inputwrapCarddiv_content__setup);
_content_resume($inputwrapCarddiv_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputwrapCarddiv_content);
const $for_content__input_wrap = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_wrap#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_wrap", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__dynamicTag($scope, $scope._.input_wrap ? card_default : "div"))));
const $for_content__setup = $for_content__input_wrap;
const $for_content__$params = ($scope, $params2) => $for_content__row_label($scope, $params2[0]?.label);
const $for_content__row_label__closure = /*@__PURE__*/ _closure($inputwrapCarddiv_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_wrap($scope, input.wrap);
	$input_suffix($scope, input.suffix);
};
const $input_wrap = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_wrap", $for_content__input_wrap);
const $input_suffix__closure = /*@__PURE__*/ _closure($inputwrapCarddiv_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
