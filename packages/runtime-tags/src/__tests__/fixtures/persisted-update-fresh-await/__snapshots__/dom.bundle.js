// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "loading reviews…", "b");
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for(0, "a6", (branch, args) => _update_scope(args[0], branch));
const $count_seed = _update_signal("a2");
const $await_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) _update_branch(patch, live, "a", $await_content__update);
};
const $if_content__update = (patch, live) => {
	_update_scope(patch, live);
	if ("Ab" in patch) _update_branch(patch, live, "b", $try_content__update);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) _update_if(patch, live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a7", $update);
function createPatch() {
	return createPatch$1(_merge);
}
