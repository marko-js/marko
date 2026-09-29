// template.marko
const $template = "<p> </p><p> </p><button>+</button>";
const $walks = "D lD l b";
const $qty__OR__price = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "price", /*@__PURE__*/ _or(9, ($scope) => _text($scope["#text/1"], $scope.price * $scope.qty)));
const $qty = /*@__PURE__*/ _let("qty/7", $qty__OR__price);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$qty($scope, +$scope.qty + 1);
}));
function $setup($scope) {
	$qty($scope, 1);
	$setup__script($scope);
}
const $price = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "price", $qty__OR__price);
const $price__OR__tax = ($scope) => {
	_text($scope["#text/0"], $scope.price + $scope.input_item_price * .1);
};
const $input_item_price = /*@__PURE__*/ _const("input_item_price", ($scope) => {
	$price($scope, $scope.input_item_price);
	$price__OR__tax($scope);
});
const $input = ($scope, input) => $input_item($scope, input.item);
const $input_item = ($scope, input_item) => $input_item_price($scope, input_item?.price);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
