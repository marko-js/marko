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
const $if_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	_update_scope(_patch, _live);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	_update_scope(_patch, _live);
	if ("De" in _patch) _update_if(_patch, _live, "De", "Ae", [$if_content__update]);
	$globals_update(_live);
};
const _merge = _resume("a5", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
