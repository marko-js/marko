// tags/layout.marko
enableBranchesPersisted();

// tags/frame.marko
enableBranchesPersisted();

// template.marko
const $Dashboard_content__tally = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $Dashboard_content__setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$Dashboard_content__tally($scope, $scope.d + 1);
}));
const $frame_content__count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $frame_content__setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$frame_content__count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/layout.marko.update.mjs
const $update$2 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$2 = _resume("c1", $update$2);
_update_content("c", _merge$2);

// tags/frame.marko.update.mjs
const $update$1 = (_patch, _live) => {
	if ("Da" in _patch || "Aa" in _patch) _update_dynamic(_patch, _live, "Da", "Aa");
};
const _merge$1 = _resume("b1", $update$1);
_update_content("b", _merge$1);

// template.marko.update.mjs
const $tally_seed = _update_signal("a5");
const $count_seed = _update_signal("a2");
const $Dashboard_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $tally_seed, _patch["d"]);
	_update_scope(_patch, _live);
};
const $frame_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("c" in _patch) _merge$2(_patch["c"], _live["c"]);
};
const $update = (_patch, _live) => {
	if ("a" in _patch) _merge$1(_patch["a"], _live["a"]);
};
_update_content("a6", $Dashboard_content__update);
_update_content("a3", $frame_content__update);
const _merge = _resume("a7", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
