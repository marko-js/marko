// tags/keeper.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/keeper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/keeper.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/keeper.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/keeper.marko_fill0", "input_content", $if_content__input_content);
var keeper_default = /*@__PURE__*/ _template("__tests__/tags/keeper.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $xKeeperdiv_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $xKeeperdiv_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_2_input_content#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $xKeeperdiv_content__dynamicTag($scope, $scope._._.input_content), ($scope) => $scope._._, "__tests__/tags/card.marko_2_input_content#0:4/subscribe"), 0));
const $xKeeperdiv_content__setup = $xKeeperdiv_content__input_content;
const $xKeeperdiv_content = _content("__tests__/tags/card.marko_2*content", "<!><!><!>", "b%", $xKeeperdiv_content__setup);
_content_resume($xKeeperdiv_content);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $xKeeperdiv_content);
const $await_content__x = ($scope, x) => $await_content__dynamicTag($scope, x ? keeper_default : "div");
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_p$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_p$1($scope, input.p);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($xKeeperdiv_content__input_content);
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
