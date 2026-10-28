// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill("__tests__/tags/card.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
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
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
const $Label_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_note#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/10", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe"), 0));
const $Label_content__setup = $Label_content__input_note;
const $Label_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Label_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_x__OR__Label = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.input_x ? $scope.Label : "span"));
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_on__OR__Label = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag2($scope, $scope.input_on ? card_default : "div", ($_) => ({ content: $scope.Label })));
const $Label = /*@__PURE__*/ _const("Label", ($scope) => {
	$input_x__OR__Label($scope);
	$input_on__OR__Label($scope);
});
function $setup($scope) {
	$Label($scope, { content: $Label_content($scope) });
}
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__Label);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__Label);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($Label_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
