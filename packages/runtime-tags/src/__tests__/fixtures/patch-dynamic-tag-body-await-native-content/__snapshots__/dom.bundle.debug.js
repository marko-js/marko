// tags/card.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $await_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_content#0:4/init", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => _attr_content($scope, "#div/0", $scope._.input_content), 0, "__tests__/tags/card.marko_1_input_content#0:4/subscribe"));
const $await_content__setup = $await_content__input_content;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div></div>", " ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $setup$2 = $await_content;
const $input_p$1 = $await_promise;
const $input$2 = ($scope, input) => {
	$input_p$1($scope, input.p);
	$input_content$1($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($await_content__input_content);
const $input_content$1 = /*@__PURE__*/ _const("input_content", $input_content__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "b%c", $setup$2, $input$2);

// tags/keeper.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill("__tests__/tags/keeper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/keeper.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/keeper.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/keeper.marko_fill0", "input_content", $if_content__input_content);
var keeper_default = /*@__PURE__*/ _template("__tests__/tags/keeper.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c");
const $inputonKeeperdiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_note#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:5/subscribe"), 0));
const $inputonKeeperdiv_content__setup = $inputonKeeperdiv_content__input_note;
const $inputonKeeperdiv_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $inputonKeeperdiv_content__setup);
_content_resume($inputonKeeperdiv_content);
const $Card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonKeeperdiv_content);
const $Card_content__input_on = /*@__PURE__*/ _closure_get("input_on/6", ($scope) => $Card_content__dynamicTag($scope, $scope._.input_on ? keeper_default : "div"), 0, "__tests__/template.marko_1_input_on#0:4/subscribe");
const $Card_content__setup = $Card_content__input_on;
const $Card_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Card_content__setup);
function $setup($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"], $Card_content($scope));
}
const $input_p = ($scope, input_p) => $input_p$1($scope["#childScope/0"], input_p);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_p($scope, input.p);
	$input_note($scope, input.note);
};
const $input_on__closure = /*@__PURE__*/ _closure($Card_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__closure);
const $input_note__closure = /*@__PURE__*/ _closure($inputonKeeperdiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
