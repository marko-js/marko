// tags/badge.marko
enableBranchesPersisted();

// tags/panel.marko
enableBranchesPersisted();

// tags/toggle.marko
const $on = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "on" : "off"));
const $setup__script$1 = _script_update("d0", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.g);
}));
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(14, ($scope) => _text($scope.b, $scope.o));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.o + 1);
}));
enableBranchesPersisted();

// tags/toggle.marko.update.mjs
const $on_seed = _update_signal("d1");
const $update$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $on_seed, _patch["g"]);
	_update_scope(_patch, _live);
};
const _merge$1 = _resume("d2", $update$1);
_update_content("d", _merge$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("o" in _patch) _update_seed(_live, $count_seed, _patch["o"]);
	_update_scope(_patch, _live);
	if ("e" in _patch) _merge$1(_patch["e"], _live["e"]);
};
const _merge = _resume("a2", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
