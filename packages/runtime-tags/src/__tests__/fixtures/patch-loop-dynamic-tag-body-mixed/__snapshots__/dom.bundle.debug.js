// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/card.marko_1_input_content#0:4/setup", "#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_0_open#5/fill", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $rowcardCarddiv_content__row_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_row_label#1:4/subscribe", "row_label/5", ($scope) => _text($scope["#text/0"], $scope._.row_label), 0, "__tests__/template.marko_1_row_label#4/subscribers", 0);
const $rowcardCarddiv_content__setup = $rowcardCarddiv_content__row_label;
const $rowcardCarddiv_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $rowcardCarddiv_content__setup);
_content_closures_resume($rowcardCarddiv_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $rowcardCarddiv_content);
const $for_content__$params = ($scope, $params2) => {
	$for_content__dynamicTag($scope, $params2[0]?.card ? card_default : "div");
	$for_content__row_label($scope, $params2[0]?.label);
};
const $for_content__row_label__closure = /*@__PURE__*/ _closure($rowcardCarddiv_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _const("row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
