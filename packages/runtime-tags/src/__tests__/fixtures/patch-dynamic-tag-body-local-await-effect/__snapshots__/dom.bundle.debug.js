// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
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
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $inputonCarddiv_content__x = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_x#1:2/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill3", "x", /*@__PURE__*/ _closure_get("x/10", ($scope) => _text($scope["#text/0"], $scope._._.x), ($scope) => $scope._._, "__tests__/template.marko_3_x#1:2/subscribe"), 0));
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__x($scope);
	$inputonCarddiv_content__v($scope);
};
const $inputonCarddiv_content__v = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_v#2:2/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill4", "v", /*@__PURE__*/ _closure_get("v/11", ($scope) => _text($scope["#text/1"], $scope._.v), 0, "__tests__/template.marko_3_v#2:2/subscribe"), 0));
const $inputonCarddiv_content = _content("__tests__/template.marko_3*content", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $await_content__input_on = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_on#0:6/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill2", "input_on", /*@__PURE__*/ _closure_get("input_on/9", ($scope) => $await_content__dynamicTag($scope, $scope._._.input_on ? card_default : "div"), ($scope) => $scope._._, "__tests__/template.marko_2_input_on#0:6/subscribe"), 0));
const $await_content__setup = $await_content__input_on;
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content__v__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__v);
const $await_content__v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill4", "v", $await_content__v__closure);
const $if_content__x__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__x);
const $if_content__x__script = _script("__tests__/template.marko_1_x#2", ($scope) => _el_read($scope["#div/0"]).textContent = $scope.x);
const $if_content__x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill3", "x", ($scope) => {
	$if_content__x__closure($scope);
	$if_content__x__script($scope);
}, /*@__PURE__*/ _fill_mark("x", $if_content__x__closure));
const $if_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__x($scope, $scope._.input_note + "!"))));
const $if_content__setup = ($scope) => {
	$if_content__input_note._($scope);
	$if_content__input_v._($scope);
	$await_content($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content__setup);
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $if_content__input_v = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_v#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_v", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__await_promise($scope, $scope._.input_v))));
const $if = /*@__PURE__*/ _if("#main/0", "<div></div><!><!>", " b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_note($scope, input.note);
	$input_v($scope, input.v);
	$input_on($scope, input.on);
};
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $if_content__input_note);
const $input_v = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_v", $if_content__input_v);
const $input_on__closure = /*@__PURE__*/ _closure($await_content__input_on);
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "input_on", $input_on__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
