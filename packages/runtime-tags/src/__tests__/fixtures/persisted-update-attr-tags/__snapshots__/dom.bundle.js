// tags/inner.marko
enableBranchesPersisted();

// tags/panel.marko
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.h + 1);
}));
enableBranchesPersisted();

// tags/inner.marko.update.mjs
const $update$2 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$2 = _resume("b1", $update$2);
_update_content("b", _merge$2);

// tags/panel.marko.update.mjs
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const $update$1 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
	if ("Db" in _patch || "Ab" in _patch) _update_dynamic(_patch, _live, "Db", "Ab");
	if ("Ac" in _patch) $for_update(_live, [_patch["Ac"], "M"]);
};
const _merge$1 = _resume("c4", $update$1);
_update_content("c", _merge$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $body_content__update = (_patch, _live) => {
	if ("a" in _patch) _merge$2(_patch["a"], _live["a"]);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("h" in _patch) _update_seed(_live, $count_seed, _patch["h"]);
	if ("c" in _patch) _merge$1(_patch["c"], _live["c"]);
};
_update_content("a4", _update_scope);
_update_content("a3", $body_content__update);
_update_content("a2", _update_scope);
const _merge = _resume("a6", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
