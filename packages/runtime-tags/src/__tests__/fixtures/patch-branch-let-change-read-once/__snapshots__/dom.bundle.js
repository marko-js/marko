// template.marko
const reads = /* @__PURE__ */ new WeakSet();
function read($global, handler) {
	if (reads.has($global)) throw new Error("A `valueChange` was read twice in one render.");
	reads.add($global);
	queueMicrotask(() => reads.delete($global));
	return handler;
}
const $if_content__count = /*@__PURE__*/ _fill_let_change("a3", 3, ($scope) => _text($scope.b, $scope.d));
const $if_content__input_start__OR__onCount__OR__$global = /*@__PURE__*/ _or_patch("a2", 2, ($scope) => $if_content__count($scope, $scope._.f, read($scope.$, $scope._.h)), 2);
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$if_content__count($scope, +$scope.d + 1);
}));
const $if_content__$global = /*@__PURE__*/ _if_closure_patch("a8", 1, 0, $if_content__input_start__OR__onCount__OR__$global);
const $last = _let(6, ($scope) => _text($scope.a, $scope.g));
const $global2 = _fill_global("a5", $if_content__$global, "");
const $onCount = ($scope) => (next) => {
	$last($scope, next);
};
_resumed.a0 = $onCount;
