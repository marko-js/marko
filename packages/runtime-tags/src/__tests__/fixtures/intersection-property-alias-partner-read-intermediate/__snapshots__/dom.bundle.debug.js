// tags/row.marko
const $template$1 = "<span></span>";
const $walks$1 = " b";
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
const $item = ($scope, item) => $item_status($scope, item?.status);
const $input_inc__OR__sfx = /*@__PURE__*/ _or(6, ($scope) => $item($scope, feed($scope.input_inc, $scope.sfx)));
const $sfx = /*@__PURE__*/ _let("sfx/5", $input_inc__OR__sfx);
function $setup$1($scope) {
	$sfx($scope, "!");
}
const $input_inc_pending__OR__upper = /*@__PURE__*/ _or(10, ($scope) => _attr_class($scope["#span/0"], [$scope.upper, $scope.input_inc_pending && "pending"]));
const $upper = /*@__PURE__*/ _const("upper", $input_inc_pending__OR__upper);
const $item_status__script = _script("__tests__/tags/row.marko_0_item_status#8", ($scope) => console.log($scope.item_status));
const $item_status = /*@__PURE__*/ _const("item_status", ($scope) => {
	$upper($scope, $scope.item_status.toUpperCase());
	$item_status__script($scope);
});
const $input_inc = /*@__PURE__*/ _const("input_inc", ($scope) => {
	$input_inc_pending($scope, $scope.input_inc?.pending);
	$input_inc__OR__sfx($scope);
});
const $input_inc_pending = /*@__PURE__*/ _const("input_inc_pending", $input_inc_pending__OR__upper);
const $input = ($scope, input) => $input_inc($scope, input.inc);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>pend</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)(" b");
const $inc = /*@__PURE__*/ _let("inc/2", ($scope) => $input_inc($scope["#childScope/1"], $scope.inc));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$inc($scope, {
		status: "open",
		pending: true
	});
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$inc($scope, { status: "open" });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
