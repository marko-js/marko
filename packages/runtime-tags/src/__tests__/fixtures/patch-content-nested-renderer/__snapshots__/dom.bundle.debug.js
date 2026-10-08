// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $card_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_2_input_note#0:4/init", "input_note/6", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:4/subscribe"), 0);
const $card_content__setup = ($scope) => {
	$card_content__input_note($scope);
	$card_content__input_inner($scope);
};
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $card_content__input_inner = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_inner", /*@__PURE__*/ _shell_subscribe_closure_get("__tests__/template.marko_2_input_inner#0:5/init", "input_inner/7", ($scope) => $card_content__dynamicTag($scope, $scope._._.input_inner), ($scope) => $scope._._, "__tests__/template.marko_2_input_inner#0:5/subscribe"), 0);
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p> </p><!><!>", "D l%", $card_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $card_content($scope));
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
	$input_inner($scope, input.inner);
};
const $input_note__closure = /*@__PURE__*/ _closure($card_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
const $input_inner__closure = /*@__PURE__*/ _closure($card_content__input_inner);
const $input_inner = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_inner", $input_inner__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
