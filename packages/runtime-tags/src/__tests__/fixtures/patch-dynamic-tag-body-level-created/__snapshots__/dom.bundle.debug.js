// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag$1($scope, $scope._.input_content)));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup$1);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if$1($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open($scope, true);
	$setup__script$1($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "c/2", ($scope) => {
	_text($scope["#text/1"], $scope.c);
	_return($scope, $scope.c);
});
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, +$scope.c + 1);
}));
function $setup$1($scope) {
	$c($scope, 1);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_note#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:5/subscribe"), 0));
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_note($scope);
	$inputonCarddiv_content__v($scope);
};
const $inputonCarddiv_content__v = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_v#1:3/init", /*@__PURE__*/ _closure_get("v/8", ($scope) => _text($scope["#text/1"], $scope._.v)));
const $inputonCarddiv_content = _content("__tests__/template.marko_2*content", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $inputonCarddiv_content);
const $if_content__input_on = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_on#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_on ? card_default : "div"))));
const $if_content__setup = ($scope) => {
	$if_content__input_on._($scope);
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $if_content__v);
};
const $if_content__v__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__v);
const $if_content__v = _var_resume("__tests__/template.marko_1_v#3/var", /*@__PURE__*/ _const("v", $if_content__v__closure));
const $if = /*@__PURE__*/ _if("#main/0", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}&%c`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_on", $if_content__input_on);
const $input_note__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
