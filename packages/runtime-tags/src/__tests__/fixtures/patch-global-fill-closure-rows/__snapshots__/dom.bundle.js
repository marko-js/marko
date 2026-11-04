// shop.marko
function bankCount(p, id) {
	return p.bank[id];
}
function withDrops(base, drops, id) {
	return base + (drops[id] ?? 0);
}
const $for_content2__proj__OR__now__OR__have = /*@__PURE__*/ _or_patch("a1", 8, ($scope) => _attr_class_item($scope.a, "short", $scope.h + $scope._._._.i * $scope._._._.h < 2), 2);
const $for_content2__have = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.c, $scope.h);
	$for_content2__proj__OR__now__OR__have($scope);
});
const $for_content2__p__OR__drops__OR__part = /*@__PURE__*/ _or_patch("a0", 6, ($scope) => $for_content2__have($scope, withDrops(bankCount($scope._._._.e, $scope.f), $scope._._._.j, $scope.f)), 2);
const $for_content2__now = /*@__PURE__*/ _closure_get_patch("a2", 13, $for_content2__proj__OR__now__OR__have, ($scope) => $scope._._._);
const $for_content2__drops = /*@__PURE__*/ _closure_get_patch("a3", 14, $for_content2__p__OR__drops__OR__part, ($scope) => $scope._._._);
const $now__closure = /*@__PURE__*/ _closure($for_content2__now);
const $now = /*@__PURE__*/ _fill_let("a9", 8, ($scope) => {
	_text($scope.b, $scope.i);
	$now__closure($scope);
});
const $drops = /*@__PURE__*/ _fill_let("a10", 9, /* @__PURE__ */ _closure($for_content2__drops));
const $setup__script = _script("a8", ($scope) => {
	_on($scope.a, "click", function() {
		$now($scope, +$scope.i + 1);
	});
	_on($scope.c, "click", function() {
		$drops($scope, { x: 1 });
	});
});
