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
const $rowcardCarddiv_content__row_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_row_label#1:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "row_label", /*@__PURE__*/ _closure_get("row_label/7", ($scope) => _text($scope["#text/0"], $scope._._.row_label), ($scope) => $scope._._, "__tests__/template.marko_3_row_label#1:5/subscribe"), 0));
const $rowcardCarddiv_content__setup = ($scope) => {
	$rowcardCarddiv_content__row_label($scope);
	$rowcardCarddiv_content__v($scope);
};
const $rowcardCarddiv_content__v = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_v#2:2/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "v", /*@__PURE__*/ _closure_get("v/8", ($scope) => _text($scope["#text/1"], $scope._.v), 0, "__tests__/template.marko_3_v#2:2/subscribe"), 0));
const $rowcardCarddiv_content = _content("__tests__/template.marko_3*content", "<b><!> <!></b>", "D%c%", $rowcardCarddiv_content__setup);
_content_resume($rowcardCarddiv_content);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $rowcardCarddiv_content);
const $await_content__row_card = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_row_card#1:4/init", /*@__PURE__*/ _closure_get("row_card/6", ($scope) => $await_content__dynamicTag($scope, $scope._.row_card ? card_default : "div"), 0, "__tests__/template.marko_2_row_card#1:4/subscribe"));
const $await_content__setup = $await_content__row_card;
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content__v__closure = /*@__PURE__*/ _closure($rowcardCarddiv_content__v);
const $await_content__v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "v", $await_content__v__closure);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__setup = $await_content;
const $for_content__row_p = $for_content__await_promise;
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_p($scope, $params2[0]?.p);
	$for_content__row_card($scope, $params2[0]?.card);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $for_content__row_card__closure = /*@__PURE__*/ _closure($await_content__row_card);
const $for_content__row_card = /*@__PURE__*/ _const("row_card", $for_content__row_card__closure);
const $for_content__row_label__closure = /*@__PURE__*/ _closure($rowcardCarddiv_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
