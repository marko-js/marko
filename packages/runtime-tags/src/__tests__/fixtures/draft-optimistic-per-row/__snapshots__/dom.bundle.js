// template.marko
const $for_content__remove__script = _script("a1", ($scope) => _on($scope.a, "click", $scope.f));
const $for_content__remove = /*@__PURE__*/ _const(5, ($scope) => {
	$for_content__remove_pending($scope, $scope.f?.pending);
	$for_content__remove__script($scope);
});
const $for_content__serverEntries__OR__entries__OR__entry = /*@__PURE__*/ _or(4, ($scope) => $for_content__remove($scope, $remove($scope)), 2);
const $for_content__serverEntries = /*@__PURE__*/ _for_closure(0, $for_content__serverEntries__OR__entries__OR__entry);
const $for_content__setup = ($scope) => {
	$for_content__serverEntries._($scope);
	$for_content__entries._($scope);
};
const $for_content__entries = /*@__PURE__*/ _for_closure(0, $for_content__serverEntries__OR__entries__OR__entry);
const $for_content__remove_pending = /*@__PURE__*/ _let(6, ($scope) => _attr($scope.a, "disabled", $scope.g));
const $for_content__entry = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.b, $scope.d);
	$for_content__serverEntries__OR__entries__OR__entry($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<li><button> </button></li>", "D D m", $for_content__setup, $for_content__$params);
const $entries = /*@__PURE__*/ _draft(2, ($scope) => {
	$for($scope, [$scope.c, (e) => e]);
	$for_content__entries($scope);
});
const $serverEntries = /*@__PURE__*/ _let(1, ($scope) => {
	$entries($scope, $scope.b);
	$for_content__serverEntries($scope);
});
function $remove($scope) {
	return _action($scope, 5, $for_content__remove_pending, _action_async(function* () {
		$entries.d($scope._, $scope._.c.filter((e) => e !== $scope.d));
		$serverEntries($scope._, yield resolveAfter($scope._.b.filter((e) => e !== $scope.d)));
	}));
}
_resume("a0", $remove);
