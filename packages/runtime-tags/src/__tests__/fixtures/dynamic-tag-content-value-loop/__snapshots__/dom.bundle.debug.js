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
const $setup = ($_) => {};
const $Label_content__input_note = /*@__PURE__*/ _closure_get("input_note/6", ($scope) => _text($scope["#text/1"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:4/subscribe");
const $Label_content__setup = ($scope) => {
	$Label_content__input_note($scope);
	$Label_content__item($scope);
};
const $Label_content__item = /*@__PURE__*/ _closure_get("item/8", ($scope) => _text($scope["#text/0"], $scope._.item), 0, "__tests__/template.marko_2_item#1:2/subscribe");
const $Label_content = _content("__tests__/template.marko_2*content", "<em><!> <!></em>", "D%c%", $Label_content__setup);
_content_resume($Label_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__input_on__OR__Label = /*@__PURE__*/ _or(4, ($scope) => $for_content__dynamicTag($scope, $scope._.input_on ? card_default : "div", ($_) => ({ content: $scope.Label })));
const $for_content__input_on = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_on__OR__Label);
const $for_content__Label = /*@__PURE__*/ _const("Label", $for_content__input_on__OR__Label);
const $for_content__setup = ($scope) => {
	$for_content__input_on._($scope);
	$for_content__Label($scope, { content: $Label_content($scope) });
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item__closure = /*@__PURE__*/ _closure($Label_content__item);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__item__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_note($scope, input.note);
	$input_on($scope, input.on);
};
const $input_note__closure = /*@__PURE__*/ _closure($Label_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
const $input_on = /*@__PURE__*/ _const("input_on", $for_content__input_on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
