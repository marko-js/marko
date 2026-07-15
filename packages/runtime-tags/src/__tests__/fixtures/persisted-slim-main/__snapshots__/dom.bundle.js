// template.marko
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for_keyed(0, ($p, $l) => _update_scope($p, $l));
const $for_update2 = _update_for_keyed(1, ($p2, $l2) => $for_content__update($p2, $l2));
const $count_seed = _update_signal("a2");
const $for_content__update = (_patch, _live) => {
	if ("Da" in _patch) _update_if(_patch, _live, "Da", "Aa", [0, _update_scope]);
};
const $if_content__update = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
	if ("Ab" in _patch) $for_update2(_live, [_patch["Ab"], "M"]);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("l" in _patch) _update_seed(_live, $count_seed, _patch["l"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("j" in _patch) _live["j"] = _patch["j"];
	if ("k" in _patch) _live["k"] = _patch["k"];
	if ("Dc" in _patch) _update_if(_patch, _live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a6", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
