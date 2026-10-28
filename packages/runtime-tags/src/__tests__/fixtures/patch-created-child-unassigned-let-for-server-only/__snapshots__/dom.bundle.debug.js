// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<li> </li>", "D ", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/4", ($scope) => $for($scope, [$scope.items]));
const $input_items$1 = $items;
const $input$1 = ($scope, input) => $input_items$1($scope, input.items);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__input_items = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_items", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_on", /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_on ? card_default : "div", ($_) => ({ items: $scope.input_items })))));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_on__OR__input_items);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);
