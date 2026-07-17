// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $for_content__remove__script = _script("__tests__/template.marko_1_remove", ($scope) => _on($scope["#button/0"], "click", $scope.remove));
const $for_content__remove = /*@__PURE__*/ _const("remove", ($scope) => {
	$for_content__remove_pending($scope, $scope.remove?.pending);
	$for_content__remove__script($scope);
});
const $for_content__serverEntries__OR__entries__OR__entry = /*@__PURE__*/ _or(4, ($scope) => $for_content__remove($scope, $remove($scope)), 2);
const $for_content__serverEntries = /*@__PURE__*/ _for_closure("#ul/0", $for_content__serverEntries__OR__entries__OR__entry);
const $for_content__setup = ($scope) => {
	$for_content__serverEntries._($scope);
	$for_content__entries._($scope);
};
const $for_content__entries = /*@__PURE__*/ _for_closure("#ul/0", $for_content__serverEntries__OR__entries__OR__entry);
const $for_content__remove_pending = /*@__PURE__*/ _let("remove_pending/6", ($scope) => _attr($scope["#button/0"], "disabled", $scope.remove_pending));
const $for_content__entry = /*@__PURE__*/ _const("entry", ($scope) => {
	_text($scope["#text/1"], $scope.entry);
	$for_content__serverEntries__OR__entries__OR__entry($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><button> </button></li>", "D D m", $for_content__setup, $for_content__$params);
const $entries = /*@__PURE__*/ _draft("entries/2", ($scope) => {
	$for($scope, [$scope.entries, (e) => e]);
	$for_content__entries($scope);
});
const $serverEntries = /*@__PURE__*/ _let("serverEntries/1", ($scope) => {
	$entries($scope, $scope.serverEntries);
	$for_content__serverEntries($scope);
});
function $setup($scope) {
	$serverEntries($scope, [
		"a",
		"b",
		"c"
	]);
}
function $remove($scope) {
	return _action($scope, "remove", $for_content__remove_pending, async () => {
		$entries.d($scope._, $scope._.entries.filter((e) => e !== $scope.entry));
		$serverEntries($scope._, await resolveAfter($scope._.serverEntries.filter((e) => e !== $scope.entry)));
	});
}
_resume("__tests__/template.marko_1/remove", $remove);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
