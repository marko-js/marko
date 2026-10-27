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
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_note#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:5/subscribe"), 0));
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_note($scope);
	$inputonCarddiv_content__row_label($scope);
};
const $inputonCarddiv_content__row_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_row_label#1:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill2", "row_label", /*@__PURE__*/ _closure_get("row_label/8", ($scope) => _text($scope["#text/1"], $scope._.row_label), 0, "__tests__/template.marko_2_row_label#1:3/subscribe"), 0));
const $inputonCarddiv_content = _content("__tests__/template.marko_2*content", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $for_content__input_on = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_on#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _for_closure("#main/0", ($scope) => $for_content__dynamicTag($scope, $scope._.input_on ? card_default : "div"))));
const $for_content__setup = $for_content__input_on;
const $for_content__$params = ($scope, $params2) => $for_content__row_label($scope, $params2[0]?.label);
const $for_content__row_label__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of("#main/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_on", $for_content__input_on);
const $input_note__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
