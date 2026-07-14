// template.marko
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for_keyed(0, (p, l) => _update_scope(p, l));
const $for_update2 = _update_for_keyed(1, (p, l) => $for_content__update(p, l));
const $count_seed = _update_signal("a2");
const $for_content__update = (patch, live) => {
	if ("Da" in patch) _update_if(patch, live, "Da", "Aa", [0, _update_scope]);
};
const $if_content__update = (patch, live) => {
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
	if ("Ab" in patch) $for_update2(live, [patch["Ab"], "M"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("l" in patch) _update_seed(live, $count_seed, patch["l"]);
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("k" in patch) live["k"] = patch["k"];
	if ("Dc" in patch) _update_if(patch, live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a6", $update);
function createPatch() {
	return createPatch$1(_merge);
}
