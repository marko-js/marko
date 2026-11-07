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
	$for_content__item_value($scope, item?.value);
	_text($scope["#text/0"], item?.name);
};
const $for_content__item_value__OR__qty = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_item_value#9_qty#10/setup", 11, ($scope) => _text($scope["#text/2"], $scope.qty * $scope.item_value));
const $for_content__item_value = /*@__PURE__*/ _const("item_value", $for_content__item_value__OR__qty);
const $for_content__qty = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "qty/10", ($scope) => {
	$input_value($scope["#childScope/1"], $scope.qty);
	$for_content__item_value__OR__qty($scope);
});
const $for_content__row_qty = ($scope, row_qty) => {
	$for_content__qty($scope, row_qty);
	$input_max($scope["#childScope/1"], row_qty);
};
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/1"]);
	$input_valueChange($scope["#childScope/1"], $valueChange($scope));
};
const $for_content__$params = ($scope, $params2) => {
	$for_content__item($scope, $params2[0]?.item);
	$for_content__row_qty($scope, $params2[0]?.qty);
};
const $p = ($scope, p) => $for($scope, [p?.entries, (row) => row.item.id]);
const $for = /*@__PURE__*/ _for_of("#text/0", /*@__PURE__*/ ((_w0) => `<article><strong> </strong><form>${_w0}<button class=sell>Sell <!></button></form></article>`)($template$1), /*@__PURE__*/ ((_w0) => `E lD/${_w0}&Db%n`)($walks$1), $for_content__setup, $for_content__$params);
const $global_data_player = /*@__PURE__*/ _fill_global_path("__tests__/template.marko_0_$global_data_player#6/subscribe", ($scope) => $p($scope, $scope.$global.data.player), "data", "player");
const $setup = $global_data_player;
const $valueChange = ($scope) => (_new_qty) => {
	$for_content__qty($scope, _new_qty);
};
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
