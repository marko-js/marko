// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__input_w = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/1"], $scope._.input_w));
const $for_content__setup = ($scope) => {
	$for_content__input_w._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for = /*@__PURE__*/ _for_of("#text/0", "<p><!> <!></p>", "D%c%", $for_content__setup);
const $xs = /*@__PURE__*/ _let("xs/5", ($scope) => $for($scope, [$scope.xs, (x) => x]));
const $input_items$1 = $xs;
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_w$1($scope, input.w);
};
const $input_w$1 = /*@__PURE__*/ _const("input_w", $for_content__input_w);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_items__OR__input_w = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({
	items: $scope.input_items,
	w: $scope.input_w
})), 2);
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_items__OR__input_w);
const $input_items = /*@__PURE__*/ _const("input_items", $input_on__OR__input_items__OR__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_on__OR__input_items__OR__input_w);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_items($scope, input.items);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
