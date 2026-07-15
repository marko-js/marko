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
const $if_content__update = (_patch, _live) => {
	_update_scope(_patch, _live);
	$globals_update(_live);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("Ac" in _patch) _update_for(_patch["Ac"], _live["Ac"], _update_scope);
	if ("Dd" in _patch) _update_if(_patch, _live, "Dd", "Ad", [$if_content__update]);
};
const _merge = _resume("a4", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
