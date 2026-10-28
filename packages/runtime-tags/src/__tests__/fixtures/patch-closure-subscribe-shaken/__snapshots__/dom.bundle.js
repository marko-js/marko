// shop.marko
function bankCount(p, id) {
	return p.bank[id];
}
function withDrops(base, drops, id) {
	return base + (drops[id] ?? 0);
}
const $for_content2__live = ($scope, live) => _attr_class_item($scope.a, "short", live < 2);
const $for_content2__proj__OR__now__OR__have = /*@__PURE__*/ _fill("a8", 7, /*@__PURE__*/ _or_resume("a15", 7, ($scope) => $for_content2__live($scope, $scope.g + $scope._._._.i * $scope._._._.h), 2), ($signal) => /*@__PURE__*/ _for_closure(3, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $signal))));
const $for_content2__have = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.c, $scope.g);
	$for_content2__proj__OR__now__OR__have($scope);
});
const $for_content2__p__OR__drops__OR__part = /*@__PURE__*/ _fill("a7", 4, /*@__PURE__*/ _or_resume("a14", 5, ($scope) => $for_content2__have($scope, withDrops(bankCount($scope._._._.e, $scope.e), $scope._._._.j, $scope.e)), 2), ($signal2) => /*@__PURE__*/ _for_closure(3, /*@__PURE__*/ _if_closure(0, 0, /*@__PURE__*/ _for_closure(0, $signal2))));
const $for_content2__now = /*@__PURE__*/ _init_resume("a12", /*@__PURE__*/ _closure_get(13, $for_content2__proj__OR__now__OR__have, ($scope) => $scope._._._, "a0"));
const $for_content2__drops = /*@__PURE__*/ _init_resume("a13", /*@__PURE__*/ _closure_get(14, $for_content2__p__OR__drops__OR__part, ($scope) => $scope._._._, "a1"));
const $now__closure = /*@__PURE__*/ _closure($for_content2__now);
const $now = /*@__PURE__*/ _fill_let("a9", 8, ($scope) => {
	_text($scope.b, $scope.i);
	$now__closure($scope);
});
const $drops = /*@__PURE__*/ _fill_let("a10", 9, /* @__PURE__ */ _closure($for_content2__drops));
const $setup__script = _script("a6", ($scope) => {
	_on($scope.a, "click", function() {
		$now($scope, +$scope.i + 1);
	});
	_on($scope.c, "click", function() {
		$drops($scope, { x: 1 });
	});
});
