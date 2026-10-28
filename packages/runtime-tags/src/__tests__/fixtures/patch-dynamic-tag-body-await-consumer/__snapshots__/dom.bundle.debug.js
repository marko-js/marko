// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__c = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill2", "c", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.c)));
const $if_content__setup = $if_content__c;
const $await_content__c = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill2", "c", $if_content__c);
const $await_content__input_content__OR__x = /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _or_resume("__tests__/tags/card.marko_1_input_content#0:5_x#2/init", 3, ($scope) => $await_content__c($scope, $scope.x && $scope._.input_content)), "input_content/7", 0);
const $await_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_input_content#0:5/init", /*@__PURE__*/ _closure_get("input_content/7", $await_content__input_content__OR__x, 0, "__tests__/tags/card.marko_1_input_content#0:5/subscribe"));
const $await_content__setup = ($scope) => {
	$await_content__input_content($scope);
	$await_content__open($scope);
};
const $await_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $await_content__open = /*@__PURE__*/ _init_resume("__tests__/tags/card.marko_1_open#0:6/init", /*@__PURE__*/ _closure_get("open/8", ($scope) => $await_content__if($scope, $scope._.open ? 0 : 1), 0, "__tests__/tags/card.marko_1_open#0:6/subscribe"));
const $await_content__x = /*@__PURE__*/ _const("x", $await_content__input_content__OR__x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $open__closure = /*@__PURE__*/ _closure($await_content__open);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/6", $open__closure);
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$await_content($scope);
	$open($scope, true);
	$setup__script($scope);
}
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $input_p$1 = $await_promise;
const $input$1 = ($scope, input) => {
	$input_p$1($scope, input.p);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($await_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

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
