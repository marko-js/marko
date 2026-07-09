// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a0", "loading related…", "b");
const $count = /*@__PURE__*/ _let(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
enableBranches();

// template.marko.update.mjs
const $for_update = _update_for(0, "a4", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("a5");
const $await_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("k" in patch) _update_seed(live, $count_seed, patch["k"]);
	_update_scope(patch, live);
	if ("Ad" in patch) _update_branch(patch, live, "d", $try_content__update);
	if ("Ae" in patch) _update_branch(patch, live, "e", _update_scope);
};
var template_marko_update_default = _resume("a6", $update);
