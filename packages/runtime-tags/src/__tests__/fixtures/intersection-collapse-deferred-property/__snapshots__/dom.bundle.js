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
const $input_inc__OR__sfx = /*@__PURE__*/ _or(11, ($scope) => $item($scope, feed($scope.g, $scope.k)));
const $if = /*@__PURE__*/ _if(2, "<form class=derived></form>");
const $input_inc_pending__OR__item_status = /*@__PURE__*/ _or(14, ($scope) => {
	_attr_class($scope.a, [
		"row",
		$scope.n,
		$scope.h && "pending"
	]);
	$if($scope, $scope.n !== "resolved" && !$scope.h ? 0 : 1);
});
const $item_status = /*@__PURE__*/ _const(13, $input_inc_pending__OR__item_status);
const $item_label = ($scope, item_label) => _text($scope.b, item_label);
const $input_inc = /*@__PURE__*/ _const(6, ($scope) => {
	$input_inc_pending($scope, $scope.g?.pending);
	$input_inc_status($scope, $scope.g?.status);
	$input_inc__OR__sfx($scope);
});
const $if2 = /*@__PURE__*/ _if(3, "<form class=direct></form>");
const $input_inc_pending__OR__input_inc_status = /*@__PURE__*/ _or(9, ($scope) => $if2($scope, $scope.i !== "resolved" && !$scope.h ? 0 : 1));
const $input_inc_pending = /*@__PURE__*/ _const(7, ($scope) => {
	$input_inc_pending__OR__item_status($scope);
	$input_inc_pending__OR__input_inc_status($scope);
});
const $input_inc_status = /*@__PURE__*/ _const(8, $input_inc_pending__OR__input_inc_status);

// template.marko
const $inc = /*@__PURE__*/ _let(2, ($scope) => $input_inc($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$inc($scope, { status: "resolved" });
}));
