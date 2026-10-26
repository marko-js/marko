// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $if_content__input_on = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_on#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_on$1($scope["#childScope/0"], $scope._.input_on))));
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$if_content__input_v._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_note($scope["#childScope/0"], "n");
};
const $if_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_v#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_v", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_v$1($scope["#childScope/0"], $scope._.input_v))));
const $if = /*@__PURE__*/ _if("#main/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_on($scope, input.on);
	$input_v($scope, input.v);
};
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_on", $if_content__input_on);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_v", $if_content__input_v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// tags/keeper.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/keeper.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
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

// tags/card.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $inputonKeeperdiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_2_input_note#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill1", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/tags/card.marko_2_input_note#0:5/subscribe"), 0));
const $inputonKeeperdiv_content__setup = ($scope) => {
	$inputonKeeperdiv_content__input_note($scope);
	$inputonKeeperdiv_content__v($scope);
};
const $inputonKeeperdiv_content__v = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_2_v#1:2/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill2", "v", /*@__PURE__*/ _closure_get("v/8", ($scope) => _text($scope["#text/1"], $scope._.v), 0, "__tests__/tags/card.marko_2_v#1:2/subscribe"), 0));
const $inputonKeeperdiv_content = _content("__tests__/tags/card.marko_2*content", "<em><!> <!></em>", "D%c%", $inputonKeeperdiv_content__setup);
_content_resume($inputonKeeperdiv_content);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonKeeperdiv_content);
const $await_content__input_on = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_on#0:4/init", /*@__PURE__*/ _closure_get("input_on/6", ($scope) => $await_content__dynamicTag($scope, $scope._.input_on ? keeper_default : "div"), 0, "__tests__/tags/card.marko_1_input_on#0:4/subscribe"));
const $await_content__setup = $await_content__input_on;
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content__v__closure = /*@__PURE__*/ _closure($inputonKeeperdiv_content__v);
const $await_content__v = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill2", "v", $await_content__v__closure);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_v = $await_promise;
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_on__closure = /*@__PURE__*/ _closure($await_content__input_on);
const $input_on = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_on", $input_on__closure);
const $input_note__closure = /*@__PURE__*/ _closure($inputonKeeperdiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill1", "input_note", $input_note__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, "b%c", $setup, $input);
