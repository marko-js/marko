// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure_patch("__tests__/tags/card.marko_1_input_content#0:4/setup", "#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
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
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $inputonCarddiv_content2__input_note = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_note#0:6/subscribe", "input_note/8", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_0_input_note#6/subscribers", 1);
const $inputonCarddiv_content2__setup = $inputonCarddiv_content2__input_note;
const $inputonCarddiv_content2 = _content("__tests__/template.marko_3*content", "<b> </b>", "D ", $inputonCarddiv_content2__setup);
_content_resume($inputonCarddiv_content2);
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_note#0:6/subscribe", "input_note/8", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_0_input_note#6/subscribers", 0);
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_note($scope);
	$inputonCarddiv_content__v($scope);
};
const $inputonCarddiv_content__v = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_v#1:2/subscribe", "v/9", ($scope) => _text($scope["#text/1"], $scope._.v), 0, "__tests__/template.marko_1_v#2/subscribers", 0);
const $inputonCarddiv_content = _content("__tests__/template.marko_2*content", "<em><!> <!></em>", "D%c%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $await_content__input_on = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_on#0:5/subscribe", "input_on/7", ($scope) => $await_content__dynamicTag($scope, $scope._.input_on ? card_default : "div"));
const $await_content__setup = $await_content__input_on;
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content__v__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__v);
const $await_content__v = /*@__PURE__*/ _const("v", $await_content__v__closure);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_v = $await_promise;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $inputonCarddiv_content2);
const $input_on__closure = /*@__PURE__*/ _closure($await_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", ($scope) => {
	$dynamicTag($scope, $scope.input_on ? card_default : "div");
	$input_on__closure($scope);
});
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_note, $inputonCarddiv_content2__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
