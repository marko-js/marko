// template.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $on = /*@__PURE__*/ _const("on");
const $input_items_length__OR__on__script = _script("__tests__/template.marko_0_input_items_length#3_on#4", ($scope) => console.log($scope.input_items_length, $scope.on));
const $input_items_length__OR__on = $input_items_length__OR__on__script;
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	$input_items_length($scope, $scope.input_items?.length);
	$on($scope, $scope.input_items.filter((item) => item.on).length);
	$input_items_length__OR__on($scope);
});
const $input_items_length = /*@__PURE__*/ _const("input_items_length");
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", "", "", 0, $input);
