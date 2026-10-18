// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/plain.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var plain_default = /*@__PURE__*/ _template("__tests__/tags/plain.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $inputpPlainspan_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:5/subscribe"), 0);
const $inputpPlainspan_content__setup = $inputpPlainspan_content__input_note;
const $inputpPlainspan_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $inputpPlainspan_content__setup);
_content_resume($inputpPlainspan_content);
const $inputonCarddiv_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputpPlainspan_content);
const $inputonCarddiv_content__input_p = _closure_resume("__tests__/template.marko_1_input_p#0:4/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_p", /*@__PURE__*/ _closure_get("input_p/6", ($scope) => $inputonCarddiv_content__dynamicTag($scope, $scope._.input_p ? plain_default : "span")), 0));
const $inputonCarddiv_content__setup = $inputonCarddiv_content__input_p;
const $inputonCarddiv_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? card_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_p($scope, input.p);
	$input_note($scope, input.note);
};
const $input_p__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_p);
const $input_p = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_p", $input_p__closure);
const $input_note__closure = /*@__PURE__*/ _closure($inputpPlainspan_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
