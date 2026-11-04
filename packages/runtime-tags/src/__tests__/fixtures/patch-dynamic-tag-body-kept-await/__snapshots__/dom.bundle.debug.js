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
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $await_content__input_note = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_note#0:5/subscribe", "input_note/7", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_0_input_note#5/subscribers", 0);
const $await_content__setup = $await_content__input_note;
const $await_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em><!> <!></em>", "D%c%", $await_content__setup);
const $inputonCarddiv_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $inputonCarddiv_content__input_w = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_w#0:4/subscribe", "input_w/6", ($scope) => $inputonCarddiv_content__await_promise($scope, $scope._.input_w), 0, "__tests__/template.marko_0_input_w#4/subscribers", 0);
const $inputonCarddiv_content__setup = ($scope) => {
	$inputonCarddiv_content__input_w($scope);
	$await_content($scope);
};
const $inputonCarddiv_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? card_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_w($scope, input.w);
	$input_note($scope, input.note);
};
const $input_w__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
const $input_note__closure = /*@__PURE__*/ _closure($await_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
