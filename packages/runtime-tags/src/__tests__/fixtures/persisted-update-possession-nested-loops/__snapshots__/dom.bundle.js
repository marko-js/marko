// template.marko
const $for_content2__setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope._._, $scope._._.c + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.a, $scope.c));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for_keyed(1, (p, l) => $for_content2__update(p, l));
const $count_seed = _update_signal("a1");
const $for_update2 = _update_for_keyed(1, (p, l) => $for_content__update(p, l));
const $for_content2__update = (patch, live) => {
	_update_pair(patch, live);
	_update_scope(patch, live);
};
const $for_content__update = (patch, live) => {
	if ("e" in patch) live["e"] = patch["e"];
	_update_scope(patch, live);
	if ("Ab" in patch) $for_update(live, [patch["Ab"], "M"]);
};
const $update = (patch, live) => {
	if ("c" in patch) _update_seed(live, $count_seed, patch["c"]);
	if ("Ab" in patch) $for_update2(live, [patch["Ab"], "M"]);
};
const _merge = _resume("a4", $update);
function createPatch() {
	return createPatch$1(_merge);
}
