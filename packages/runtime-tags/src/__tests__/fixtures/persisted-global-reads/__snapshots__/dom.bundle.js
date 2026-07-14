// template.marko
const $if_content__setup__script = _script_update("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 10);
}));
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $globals_update = _update_signal("a3");
const $if_content__update = (patch, live) => {
	_update_pair(patch, live);
	_update_scope(patch, live);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) _update_seed(live, $count_seed, patch["f"]);
	_update_scope(patch, live);
	if ("De" in patch) _update_if(patch, live, "De", "Ae", [$if_content__update]);
	$globals_update(live);
};
const _merge = _resume("a5", $update);
function createPatch() {
	return createPatch$1(_merge);
}
