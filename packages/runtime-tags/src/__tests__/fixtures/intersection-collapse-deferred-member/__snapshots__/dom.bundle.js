// tags/row.marko
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
const $input_inc__OR__sfx = /*@__PURE__*/ _or(9, ($scope) => $item($scope, feed($scope.g, $scope.i)));
const $input_inc_pending__OR__upper = /*@__PURE__*/ _or(15, ($scope) => _attr_class($scope.c, [
	"state",
	$scope.o,
	$scope.h && "pending"
]));
const $upper = /*@__PURE__*/ _const(14, $input_inc_pending__OR__upper);
const $if = /*@__PURE__*/ _if(3, "<form class=derived></form>");
const $input_inc_pending__OR__item_status = /*@__PURE__*/ _or(12, ($scope) => {
	_attr_class($scope.a, [
		"row",
		$scope.l,
		$scope.h && "pending"
	]);
	$if($scope, $scope.l !== "resolved" && !$scope.h ? 0 : 1);
});
const $item_status = /*@__PURE__*/ _const(11, ($scope) => {
	$upper($scope, $scope.l.toUpperCase());
	$input_inc_pending__OR__item_status($scope);
});
const $item_label = ($scope, item_label) => _text($scope.b, item_label);
const $input_inc = /*@__PURE__*/ _const(6, ($scope) => {
	$input_inc_pending($scope, $scope.g?.pending);
	$input_inc__OR__sfx($scope);
});
const $input_inc_pending = /*@__PURE__*/ _const(7, ($scope) => {
	$input_inc_pending__OR__item_status($scope);
	$input_inc_pending__OR__upper($scope);
});

// template.marko
const $flag = /*@__PURE__*/ _const(6);
const $inc_status__OR__inc_pending = ($scope) => {
	$flag($scope, $scope.e + ($scope.f ? "?" : ""));
};
const $inc_status__OR__flag = ($scope) => {
	_attr_class($scope.b, [
		"flag",
		$scope.g,
		$scope.e
	]);
};
const $inc = /*@__PURE__*/ _let(3, ($scope) => {
	$input_inc($scope.c, $scope.d);
	$inc_status($scope, $scope.d?.status);
	$inc_pending($scope, $scope.d?.pending);
	$inc_status__OR__inc_pending($scope);
	$inc_status__OR__flag($scope);
});
const $inc_status = /*@__PURE__*/ _const(4);
const $inc_pending = /*@__PURE__*/ _const(5);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$inc($scope, { status: "resolved" });
}));
