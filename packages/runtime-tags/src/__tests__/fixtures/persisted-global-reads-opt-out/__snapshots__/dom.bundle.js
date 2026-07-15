// template.marko
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
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	_update_scope(_patch, _live);
	if ("De" in _patch) _update_if(_patch, _live, "De", "Ae", [_update_scope]);
	$globals_update(_live);
};
const _merge = _resume("a4", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
