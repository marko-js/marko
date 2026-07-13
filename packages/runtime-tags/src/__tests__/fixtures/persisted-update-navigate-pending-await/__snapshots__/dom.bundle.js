// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "loading…", "b");
const $x = /*@__PURE__*/ _let_persisted(8);
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.i + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $x_seed = _update_signal("a2");
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
const _merge = _resume("a5", $update);
function createPatch() {
	return createPatch$1(_merge);
}
