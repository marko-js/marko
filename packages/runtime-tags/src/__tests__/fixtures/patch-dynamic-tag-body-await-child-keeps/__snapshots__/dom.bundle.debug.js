// tags/show-body.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_body = /*@__PURE__*/ _fill_join("__tests__/tags/show-body.marko_fill0", "input_body", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_body)));
const $if_content__setup = $if_content__input_body;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/show-body.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/show-body.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$2 = ($scope, input) => $input_body($scope, input.body);
const $input_body = /*@__PURE__*/ _fill_const("__tests__/tags/show-body.marko_fill0", "input_body", $if_content__input_body);
var show_body_default = /*@__PURE__*/ _template("__tests__/tags/show-body.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_content#0:4/init", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $input_body($scope["#childScope/0"], $scope._.input_content), 0, "__tests__/tags/card.marko_1_input_content#0:4/subscribe"));
const $await_content__setup = ($scope) => {
	$await_content__input_content($scope);
	$setup$2($scope["#childScope/0"]);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$2), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $setup$1 = $await_content;
const $input_p$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_p$1($scope, input.p);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($await_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $input_content__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill2", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:6/subscribe"), 0));
const $inputonCarddiv_content__setup = $inputonCarddiv_content__input_note;
const $inputonCarddiv_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $input_on__OR__input_p = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_p", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({ p: $scope.input_on && $scope.input_p })))));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_p);
const $input_p = /*@__PURE__*/ _const("input_p", $input_on__OR__input_p);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_p($scope, input.p);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
