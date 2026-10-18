// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Body_content__walks = "b%c";
const $Body_content__template = "<!><!><!>";
const $template = "<main><!></main>";
const $walks = "D%l";
const $await_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Body_content__setup($scope["#childScope/0"]);
};
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/7", ($scope) => _text($scope["#text/0"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:4/subscribe"), 0);
const $inputonCarddiv_content__setup = $inputonCarddiv_content__input_note;
const $inputonCarddiv_content = _content("__tests__/template.marko_2*content", "<em> </em>", "D ", $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $Body_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonCarddiv_content);
const $Body_content__input_on = /*@__PURE__*/ _closure_get("input_on/6", ($scope) => $Body_content__dynamicTag($scope, $scope._.input_on ? card_default : "div"), 0, "__tests__/template.marko_1_input_on#0:3/subscribe");
const $Body_content__setup = $Body_content__input_on;
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $setup = $await_content;
const $input_v = $await_promise;
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_v($scope, input.v);
	$input_note($scope, input.note);
};
const $input_on__closure = /*@__PURE__*/ _closure($Body_content__input_on);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__closure);
const $input_note__closure = /*@__PURE__*/ _closure($inputonCarddiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
