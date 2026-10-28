// tags/card.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_c = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_c#0:4/init", /*@__PURE__*/ _fill("__tests__/tags/card.marko_fill0", "input_c", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_c))));
const $if_content__setup = $if_content__input_c;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$2 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_c($scope, input.c);
};
const $input_c = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_c", $if_content__input_c);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "b%c", 0, $input$2);

// tags/one.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_Tag__OR__input_content__OR__input_show = /*@__PURE__*/ _fill("__tests__/tags/one.marko_fill2", "input_show", /*@__PURE__*/ _fill("__tests__/tags/one.marko_fill1", "input_content", /*@__PURE__*/ _fill("__tests__/tags/one.marko_fill0", "input_Tag", /*@__PURE__*/ _or_resume("__tests__/tags/one.marko_0_input_Tag#3_input_content#4_input_show#5/init", 6, ($scope) => $dynamicTag($scope, $scope.input_Tag, ($_) => ({
	c: $scope.input_content,
	show: $scope.input_show
})), 2))));
const $input_Tag = /*@__PURE__*/ _const("input_Tag", $input_Tag__OR__input_content__OR__input_show);
const $input_content = /*@__PURE__*/ _const("input_content", $input_Tag__OR__input_content__OR__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_Tag__OR__input_content__OR__input_show);
const $input$1 = ($scope, input) => {
	$input_Tag($scope, input.Tag);
	$input_content($scope, input.content);
	$input_show($scope, input.show);
};
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$1, "b%c", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $one_content__input_y = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_y#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_y", /*@__PURE__*/ _closure_get("input_y/5", ($scope) => _text($scope["#text/0"], $scope._.input_y), 0, "__tests__/template.marko_1_input_y#0:4/subscribe"), 0));
const $one_content__setup = $one_content__input_y;
const $one_content = _content("__tests__/template.marko_1*content", "A<!>", "b%", $one_content__setup);
_content_resume($one_content);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $one_content($scope));
	$input_Tag($scope["#childScope/0"], card_default);
}
const $input_x = ($scope, input_x) => $input_show($scope["#childScope/0"], input_x === 1);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
const $input_y__closure = /*@__PURE__*/ _closure($one_content__input_y);
const $input_y = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_y", $input_y__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
