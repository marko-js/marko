// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a0", "loading…", "b");
const $x = /*@__PURE__*/ _let(8);
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.i + 1);
}));
enableBranches();

// template.marko.update.mjs
const $x_seed = _update_signal("a4");
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", _update_scope);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("i" in patch) _update_seed(live, $x_seed, patch["i"]);
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	_update_scope(patch, live);
	if ("Ac" in patch) _update_branch(patch, live, "c", $try_content__update);
};
var template_marko_update_default = _resume("a5", $update);
