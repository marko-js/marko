// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__input_items = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _text($scope["#text/0"], $scope._.input_items[$scope["#LoopKey"]].name), 6);
const $for_content__setup = $for_content__input_items;
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span> </span>", "D ", $for_content__setup);
const $input_flag__OR__input_items = /*@__PURE__*/ _or(5, ($scope) => $for($scope, [$scope.input_flag ? [] : $scope.input_items]));
const $input_flag = /*@__PURE__*/ _const("input_flag", $input_flag__OR__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	$input_flag__OR__input_items($scope);
	$for_content__input_items($scope);
});
const $input = ($scope, input) => {
	$input_flag($scope, input.flag);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
