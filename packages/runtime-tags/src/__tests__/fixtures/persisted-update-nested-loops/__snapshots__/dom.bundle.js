// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for_keyed(1, (p, l) => _update_scope(p, l));
const $count_seed = _update_signal("a2");
const $if_content__update = (patch, live) => {
	if ("Aa" in patch) _update_for(patch["Aa"], live["Aa"], _update_scope);
};
const $for_content__update = (patch, live) => {
	_update_scope(patch, live);
	if ("Ab" in patch) $for_update(live, [patch["Ab"], "M"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("e" in patch) live["e"] = patch["e"];
	if ("Ac" in patch) _update_for(patch["Ac"], live["Ac"], $for_content__update);
	if ("Dd" in patch) _update_if(patch, live, "Dd", "Ad", [$if_content__update]);
};
const _merge = _resume("a4", $update);
function createPatch() {
	return createPatch$1(_merge);
}
