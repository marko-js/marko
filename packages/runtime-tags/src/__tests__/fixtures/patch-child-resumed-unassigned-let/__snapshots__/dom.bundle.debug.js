// tags/card.marko
const $template$1 = "<p><!> (<!>)</p>";
const $walks$1 = "D%c%l";
const $setup$1 = ($_) => {};
const $items = /*@__PURE__*/ _let("items/5", ($scope) => {
	_text($scope["#text/0"], $scope.items.join(","));
	$items_length($scope, $scope.items?.length);
});
const $items_length = /*@__PURE__*/ _const("items_length", ($scope) => _text($scope["#text/1"], $scope.items_length));
const $input_items = $items;
const $input$1 = ($scope, input) => $input_items($scope, input.items);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_list = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_list#0:4/init", /*@__PURE__*/ _fill_signal("input_list __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_items($scope["#childScope/0"], $scope._.input_list))));
const $if_content__setup = $if_content__input_list;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_list($scope, input.list);
};
const $input_list = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_list", $if_content__input_list);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
