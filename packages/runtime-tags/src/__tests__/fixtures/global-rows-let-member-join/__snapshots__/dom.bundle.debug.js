// tags/number-stepper.marko
const $template$1 = "<button class=dec>-</button><span class=v> </span><button class=inc>+</button>";
const $walks$1 = " bD l b";
const $setup__script = _script("__tests__/tags/number-stepper.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.input_valueChange(Math.max(1, $scope.input_value - 1));
	});
	_on($scope["#button/2"], "click", function() {
		$scope.input_valueChange(Math.min($scope.input_max, $scope.input_value + 1));
	});
});
const $setup$1 = $setup__script;
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _text($scope["#text/1"], $scope.input_value));
const $input = ($scope, input) => {
	$input_valueChange($scope, input.valueChange);
	$input_value($scope, input.value);
	$input_max($scope, input.max);
};
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange");
const $input_max = /*@__PURE__*/ _const("input_max");
var number_stepper_default = /*@__PURE__*/ _template("__tests__/tags/number-stepper.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $for_content__item = ($scope, item) => {
	$for_content__item_name($scope, item?.name);
	$for_content__item_value($scope, item?.value);
};
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__item_value__OR__qty = /*@__PURE__*/ _or(11, ($scope) => _text($scope["#text/2"], $scope.qty * $scope.item_value));
const $for_content__item_value = /*@__PURE__*/ _const("item_value", $for_content__item_value__OR__qty);
const $for_content__row_item = $for_content__item;
const $for_content__qty = /*@__PURE__*/ _let("qty/10", ($scope) => {
	$input_value($scope["#childScope/1"], $scope.qty);
	$for_content__item_value__OR__qty($scope);
});
const $for_content__row_qty = ($scope, row_qty) => {
	$input_max($scope["#childScope/1"], row_qty);
	$for_content__qty($scope, row_qty);
};
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/1"]);
	$input_valueChange($scope["#childScope/1"], $valueChange($scope));
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_item($scope, $params2[0]?.item);
	$for_content__row_qty($scope, $params2[0]?.qty);
};
const $p = ($scope, p) => $p_entries($scope, p?.entries);
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<article><strong> </strong><form>${_w0}<button class=sell>Sell <!></button></form></article>`)($template$1), /*@__PURE__*/ ((_w0) => `E lD/${_w0}&Db%n`)($walks$1), $for_content__setup, $for_content__$params);
const $p_entries = ($scope, p_entries) => $for($scope, [p_entries, (row) => row.item.id]);
function $setup($scope) {
	$p($scope, $scope.$global.data.player);
}
const $valueChange = ($scope) => (_new_qty) => {
	$for_content__qty($scope, _new_qty);
};
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
