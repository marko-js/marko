// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a1", "loading…", "b");
const $await_content__count = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a0");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script_update("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a5");
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", _update_scope);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("i" in patch) _update_seed(live, $count_seed, patch["i"]);
	_update_scope(patch, live);
	if ("Ad" in patch) _update_branch(patch, live, "d", $try_content__update);
};
var template_marko_update_default = _resume("a6", $update);
