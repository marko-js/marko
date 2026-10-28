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
	$open($scope, true);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $rowcardCarddiv_content__row_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_row_label#1:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "row_label", /*@__PURE__*/ _closure_get("row_label/5", ($scope) => _text($scope["#text/0"], $scope._.row_label), 0, "__tests__/template.marko_2_row_label#1:4/subscribe"), 0));
const $rowcardCarddiv_content__setup = $rowcardCarddiv_content__row_label;
const $rowcardCarddiv_content = _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $rowcardCarddiv_content__setup);
_content_resume($rowcardCarddiv_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $rowcardCarddiv_content);
const $for_content__row_card = ($scope, row_card) => $for_content__dynamicTag($scope, row_card ? card_default : "div");
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_card($scope, $params2[0]?.card);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $for_content__row_label__closure = /*@__PURE__*/ _closure($rowcardCarddiv_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
