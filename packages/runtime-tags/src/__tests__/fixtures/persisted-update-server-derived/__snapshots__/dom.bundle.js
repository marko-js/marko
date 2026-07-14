// template.marko
const $if_content__details_price__script = _script_update("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope._, $scope.f);
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $details_price_update = _update_signal("a4");
const $count_seed = _update_signal("a2");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) $details_price_update(live, patch["f"]);
	_update_scope(patch, live);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("f" in patch) live["f"] = patch["f"];
	if ("Dc" in patch) _update_if(patch, live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a5", $update);
function createPatch() {
	return createPatch$1(_merge);
}
