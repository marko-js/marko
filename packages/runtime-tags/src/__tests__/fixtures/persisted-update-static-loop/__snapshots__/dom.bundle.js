// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot"));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $globals_update = _update_signal("a3");
const $count_seed = _update_signal("a2");
const $if_content__update = (patch, live) => {
	_update_scope(patch, live);
	$globals_update(live);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $count_seed, patch["g"]);
	if ("Ac" in patch) _update_for(patch["Ac"], live["Ac"], _update_scope);
	if ("Dd" in patch) _update_if(patch, live, "Dd", "Ad", [$if_content__update]);
};
const _merge = _resume("a4", $update);
function createPatch() {
	return createPatch$1(_merge);
}
