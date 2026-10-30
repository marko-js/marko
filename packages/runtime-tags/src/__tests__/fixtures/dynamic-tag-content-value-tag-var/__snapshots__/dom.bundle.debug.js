// tags/card.marko
const $template$1 = "<button class=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Label_content__input_note = /*@__PURE__*/ _closure_get("input_note/8", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:3/subscribe");
const $Label_content__setup = $Label_content__input_note;
const $Label_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Label_content__setup);
_content_resume($Label_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Label__OR__T = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.T, ($_) => ({ content: $scope.Label })));
const $Label = /*@__PURE__*/ _const("Label", $Label__OR__T);
function $setup($scope) {
	$Label($scope, { content: $Label_content($scope) });
}
const $T = /*@__PURE__*/ _const("T", $Label__OR__T);
const $input_on = ($scope, input_on) => $T($scope, input_on ? card_default : "div");
const $input = ($scope, input) => {
	$input_note($scope, input.note);
	$input_on($scope, input.on);
};
const $input_note__closure = /*@__PURE__*/ _closure($Label_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
