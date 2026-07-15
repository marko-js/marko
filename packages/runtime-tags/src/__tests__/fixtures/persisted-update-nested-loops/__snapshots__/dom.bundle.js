// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for_keyed(1, ($p, $l) => _update_scope($p, $l));
const $count_seed = _update_signal("a2");
const $if_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_for(_patch["Aa"], _live["Aa"], _update_scope);
};
const $for_content__update = (_patch, _live) => {
	_update_scope(_patch, _live);
	if ("Ab" in _patch) $for_update(_live, [_patch["Ab"], "M"]);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("Ac" in _patch) _update_for(_patch["Ac"], _live["Ac"], $for_content__update);
	if ("Dd" in _patch) _update_if(_patch, _live, "Dd", "Ad", [$if_content__update]);
};
const _merge = _resume("a4", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
