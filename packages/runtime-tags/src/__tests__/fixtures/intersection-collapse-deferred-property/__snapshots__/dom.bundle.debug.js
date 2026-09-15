// tags/row.marko
const $template$1 = "<div><span class=badge> </span><!><!></div>";
const $walks$1 = " E l%b%l";
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
const $item = ($scope, item) => {
	$item_status($scope, item?.status);
	$item_label($scope, item?.label);
};
const $input_inc__OR__sfx = /*@__PURE__*/ _or(11, ($scope) => $item($scope, feed($scope.input_inc, $scope.sfx)));
const $sfx = /*@__PURE__*/ _let("sfx/10", $input_inc__OR__sfx);
function $setup$1($scope) {
	$sfx($scope, "!");
}
const $if = /*@__PURE__*/ _if("#text/2", "<form class=derived></form>");
const $input_inc_pending__OR__item_status = /*@__PURE__*/ _or(14, ($scope) => {
	_attr_class($scope["#div/0"], [
		"row",
		$scope.item_status,
		$scope.input_inc_pending && "pending"
	]);
	$if($scope, $scope.item_status !== "resolved" && !$scope.input_inc_pending ? 0 : 1);
});
const $item_status = /*@__PURE__*/ _const("item_status", $input_inc_pending__OR__item_status);
const $item_label = ($scope, item_label) => _text($scope["#text/1"], item_label);
const $input_inc = /*@__PURE__*/ _const("input_inc", ($scope) => {
	$input_inc_pending($scope, $scope.input_inc?.pending);
	$input_inc_status($scope, $scope.input_inc?.status);
	$input_inc__OR__sfx($scope);
});
const $if2 = /*@__PURE__*/ _if("#text/3", "<form class=direct></form>");
const $input_inc_pending__OR__input_inc_status = /*@__PURE__*/ _or(9, ($scope) => $if2($scope, $scope.input_inc_status !== "resolved" && !$scope.input_inc_pending ? 0 : 1));
const $input_inc_pending = /*@__PURE__*/ _const("input_inc_pending", ($scope) => {
	$input_inc_pending__OR__item_status($scope);
	$input_inc_pending__OR__input_inc_status($scope);
});
const $input_inc_status = /*@__PURE__*/ _const("input_inc_status", $input_inc_pending__OR__input_inc_status);
const $input = ($scope, input) => $input_inc($scope, input.inc);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>go</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $inc = /*@__PURE__*/ _let("inc/2", ($scope) => $input_inc($scope["#childScope/1"], $scope.inc));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$inc($scope, { status: "resolved" });
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$inc($scope, { status: "open" });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
