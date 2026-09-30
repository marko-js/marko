// tags/row.marko
const $template$1 = "<div><span class=badge> </span><span></span><!></div>";
const $walks$1 = " E l b%l";
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
const $input_inc__OR__sfx = /*@__PURE__*/ _or(9, ($scope) => $item($scope, feed($scope.input_inc, $scope.sfx)));
const $sfx = /*@__PURE__*/ _let("sfx/8", $input_inc__OR__sfx);
function $setup$1($scope) {
	$sfx($scope, "!");
}
const $input_inc_pending__OR__upper = /*@__PURE__*/ _or(15, ($scope) => _attr_class($scope["#span/2"], [
	"state",
	$scope.upper,
	$scope.input_inc_pending && "pending"
]));
const $upper = /*@__PURE__*/ _const("upper", $input_inc_pending__OR__upper);
const $if = /*@__PURE__*/ _if("#text/3", "<form class=derived></form>");
const $input_inc_pending__OR__item_status = /*@__PURE__*/ _or(12, ($scope) => {
	_attr_class($scope["#div/0"], [
		"row",
		$scope.item_status,
		$scope.input_inc_pending && "pending"
	]);
	$if($scope, $scope.item_status !== "resolved" && !$scope.input_inc_pending ? 0 : 1);
});
const $item_status = /*@__PURE__*/ _const("item_status", ($scope) => {
	$upper($scope, $scope.item_status.toUpperCase());
	$input_inc_pending__OR__item_status($scope);
});
const $item_label = ($scope, item_label) => _text($scope["#text/1"], item_label);
const $input_inc = /*@__PURE__*/ _const("input_inc", ($scope) => {
	$input_inc_pending($scope, $scope.input_inc?.pending);
	$input_inc__OR__sfx($scope);
});
const $input_inc_pending = /*@__PURE__*/ _const("input_inc_pending", ($scope) => {
	$input_inc_pending__OR__item_status($scope);
	$input_inc_pending__OR__upper($scope);
});
const $input = ($scope, input) => $input_inc($scope, input.inc);
var row_default = /*@__PURE__*/ _template("__tests__/tags/row.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>resolve</button><span></span>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&`)($walks$1);
const $flag = /*@__PURE__*/ _const("flag");
const $inc_status__OR__inc_pending = ($scope) => {
	$flag($scope, $scope.inc_status + ($scope.inc_pending ? "?" : ""));
};
const $inc_status__OR__flag = ($scope) => {
	_attr_class($scope["#span/1"], [
		"flag",
		$scope.flag,
		$scope.inc_status
	]);
};
const $inc = /*@__PURE__*/ _let("inc/3", ($scope) => {
	$input_inc($scope["#childScope/2"], $scope.inc);
	$inc_status($scope, $scope.inc?.status);
	$inc_pending($scope, $scope.inc?.pending);
	$inc_status__OR__inc_pending($scope);
	$inc_status__OR__flag($scope);
});
const $inc_status = /*@__PURE__*/ _const("inc_status");
const $inc_pending = /*@__PURE__*/ _const("inc_pending");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$inc($scope, { status: "resolved" });
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$inc($scope, { status: "open" });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
