// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $for_update = _update_for_keyed(2, (p, l) => $for_content__update(p, l));
const $for_content__update = (patch, live) => {
	if ("Aa" in patch) _update_for(patch["Aa"], live["Aa"], _update_scope);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
const _merge = _resume("a3", $update);
function createPatch() {
	return createPatch$1(_merge);
}
