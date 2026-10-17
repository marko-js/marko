// shop.marko
function bankCount(p, id) {
	return p.bank[id];
}
function withDrops(base, drops, id) {
	return base + (drops[id] ?? 0);
}
const $for_content2__live = ($scope, live) => _attr_class_item($scope.a, "short", live < 2);
const $for_content2__proj__OR__now__OR__have = /*@__PURE__*/ _fill_join("a9", 7, /*@__PURE__*/ _shell_join("a14", /*@__PURE__*/ _or(8, ($scope) => $for_content2__live($scope, $scope.h + $scope._._._.i * $scope._._._.h), 2)), ($join) => /*@__PURE__*/ _for_closure(3, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join))));
const $for_content2__have = /*@__PURE__*/ _const(7, ($scope) => {
	_text($scope.c, $scope.h);
	$for_content2__proj__OR__now__OR__have($scope);
});
const $for_content2__p__OR__drops__OR__part = /*@__PURE__*/ _fill_join("a3", 5, /*@__PURE__*/ _fill_join("a8", 4, /*@__PURE__*/ _shell_join("a13", /*@__PURE__*/ _or(6, ($scope) => $for_content2__have($scope, withDrops(bankCount($scope._._._.e, $scope.f), $scope._._._.j, $scope.f)), 2)), ($join2) => /*@__PURE__*/ _for_closure(3, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $join2)))));
const $for_content2__now = _resumed.a15 = /*@__PURE__*/ _closure_get(13, $for_content2__proj__OR__now__OR__have, ($scope) => $scope._._._, "a4");
const $for_content2__drops = _resumed.a16 = /*@__PURE__*/ _closure_get(14, $for_content2__p__OR__drops__OR__part, ($scope) => $scope._._._, "a5");
const $now__closure = /*@__PURE__*/ _closure($for_content2__now);
const $now = /*@__PURE__*/ _fill_let("a10", 8, ($scope) => {
	_text($scope.b, $scope.i);
	$now__closure($scope);
});
const $drops = /*@__PURE__*/ _fill_let("a11", 9, /* @__PURE__ */ _closure($for_content2__drops));
const $setup__script = _script("a7", ($scope) => {
	_on($scope.a, "click", function() {
		$now($scope, +$scope.i + 1);
	});
	_on($scope.c, "click", function() {
		$drops($scope, { x: 1 });
	});
});
