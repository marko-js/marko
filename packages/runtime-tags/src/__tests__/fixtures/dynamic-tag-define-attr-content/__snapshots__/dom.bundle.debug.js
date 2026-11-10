// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $B_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $B_content__$params = ($scope, $params3) => $B_content__dynamicTag($scope, $params3[0].item);
const $B_content = _content("__tests__/template.marko_3*content", "<div><!></div>", "D%", 0, $B_content__$params);
const $A_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $A_content__$params = ($scope, $params2) => $A_content__dynamicTag($scope, $params2[0].item);
const $A_content = _content("__tests__/template.marko_2*content", "<p><!></p>", "D%", 0, $A_content__$params);
const $item_content__input_note = /*@__PURE__*/ _closure_get("input_note/8", ($scope) => _text($scope["#text/0"], $scope._.input_note), 0, "__tests__/template.marko_1_input_note#0:4/subscribe");
const $item_content__setup = $item_content__input_note;
const $item_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $item_content__setup);
_content_resume($item_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__A__OR__B = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_on ? $scope.A : $scope.B, ($_) => ({ item: attrTag({ content: $item_content($scope) }) })), 2);
const $A = /*@__PURE__*/ _const("A", $input_on__OR__A__OR__B);
const $B = /*@__PURE__*/ _const("B", $input_on__OR__A__OR__B);
function $setup($scope) {
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
}
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__A__OR__B);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($item_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
