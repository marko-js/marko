// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/fwd.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $globalppCard_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $globalppCard_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/fwd.marko_1_input_content#0:3/init", /*@__PURE__*/ _fill_closure("__tests__/tags/fwd.marko_fill0", "input_content", /*@__PURE__*/ _closure_get("input_content/4", ($scope) => $globalppCard_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/fwd.marko_1_input_content#0:3/subscribe"), 0));
const $globalppCard_content__setup = $globalppCard_content__input_content;
const $globalppCard_content = _content("__tests__/tags/fwd.marko_1*content", "<!><!><!>", "b%", $globalppCard_content__setup);
_content_resume($globalppCard_content);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0", $globalppCard_content);
const $setup__$global_p = /*@__PURE__*/ _fill_global("__tests__/tags/fwd.marko_0_$global_p#5", ($scope) => $dynamicTag$1($scope, $scope.$global.p ? "p" : card_default), "p");
const $setup$1 = $setup__$global_p;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($globalppCard_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/fwd.marko_fill0", "input_content", $input_content__closure);
var fwd_default = /*@__PURE__*/ _template("__tests__/tags/fwd.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $inputonFwddiv_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0));
const $inputonFwddiv_content__setup = $inputonFwddiv_content__input_note;
const $inputonFwddiv_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $inputonFwddiv_content__setup);
_content_resume($inputonFwddiv_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonFwddiv_content);
const $input_on = ($scope, input_on) => $dynamicTag($scope, input_on ? fwd_default : "div");
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputonFwddiv_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
