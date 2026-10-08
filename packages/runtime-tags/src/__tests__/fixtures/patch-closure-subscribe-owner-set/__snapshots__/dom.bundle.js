// shop.marko
function bankCount(p, id) {
	return p.bank[id];
}
function withDrops(base, drops, id) {
	return base + (drops[id] ?? 0);
}
const $for_content2__live = ($scope, live) => _attr_class_item($scope.a, "short", live < 2);
const $for_content2__proj__OR__now__OR__have = _fill_join("a9", 10, /*@__PURE__*/ _shell_join("a14", /*@__PURE__*/ _or(8, ($scope) => $for_content2__live($scope, $scope.h + $scope._._._.l * $scope._._._.k), 2)), 0, ($join) => /*@__PURE__*/ _for_closure(3, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join))));
const $for_content2__have = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.c, $scope.h);
	$for_content2__proj__OR__now__OR__have($scope);
});
const $for_content2__p__OR__drops__OR__part = _fill_join("a3", 5, /*@__PURE__*/ _fill_join("a8", 4, /*@__PURE__*/ _shell_join("a13", /*@__PURE__*/ _or(6, ($scope) => $for_content2__have($scope, withDrops(bankCount($scope._._._.e, $scope.f), $scope._._._.m, $scope.f)), 2)), 0, ($join2) => /*@__PURE__*/ _for_closure(3, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join2)))));
const $for_content2__now = _shell_closure_get("a15", 16, $for_content2__proj__OR__now__OR__have, ($scope) => $scope._._._, "a4");
const $for_content2__drops = _shell_closure_get("a16", 17, $for_content2__p__OR__drops__OR__part, ($scope) => $scope._._._, "a5");
const $now__closure = /*@__PURE__*/ _closure($for_content2__now);
const $now = /*@__PURE__*/ _fill_let("a10", 11, ($scope) => {
	_text($scope.b, $scope.l);
	$now__closure($scope);
});
const $drops = /*@__PURE__*/ _fill_let("a11", 12, /* @__PURE__ */ _closure($for_content2__drops));
const $setup__script = _script("a7", ($scope) => {
	_on($scope.a, "click", function() {
		$now($scope, +$scope.l + 1);
	});
	_on($scope.c, "click", function() {
		$drops($scope, { x: 1 });
	});
});
