// tags/row.marko
function feed(inc, sfx) {
	return {
		status: inc.status,
		label: inc.status + sfx
	};
}
const $item = ($scope, item) => $item_status($scope, item?.status);
const $input_inc__OR__sfx = /*@__PURE__*/ _or(6, ($scope) => $item($scope, feed($scope.d, $scope.f)));
const $input_inc_pending__OR__upper = /*@__PURE__*/ _or(10, ($scope) => _attr_class($scope.a, [$scope.j, $scope.e && "pending"]));
const $upper = /*@__PURE__*/ _const(9, $input_inc_pending__OR__upper);
const $item_status__script = _script("b0", ($scope) => console.log($scope.i));
const $item_status = /*@__PURE__*/ _const(8, ($scope) => {
	$upper($scope, $scope.i.toUpperCase());
	$item_status__script($scope);
});
const $input_inc = /*@__PURE__*/ _const(3, ($scope) => {
	$input_inc_pending($scope, $scope.d?.pending);
	$input_inc__OR__sfx($scope);
});
const $input_inc_pending = /*@__PURE__*/ _const(4, $input_inc_pending__OR__upper);

// template.marko
const $inc = /*@__PURE__*/ _let(2, ($scope) => $input_inc($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$inc($scope, {
		status: "open",
		pending: true
	});
}));
