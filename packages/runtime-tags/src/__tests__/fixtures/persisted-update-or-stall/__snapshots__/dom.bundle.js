// template.marko
const $if_content__pair = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.a, $scope.e));
const $if_content__setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$if_content__pair($scope, $scope.e + "!");
}));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $pair_seed = _update_signal("a4");
const $count_seed = _update_signal("a2");
const $if_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("e" in _patch) _update_seed(_live, $pair_seed, _patch["e"]);
	_update_scope(_patch, _live);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("Dc" in _patch) _update_if(_patch, _live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a5", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
