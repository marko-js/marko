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
const $update$1 = (patch, live) => {
	_update_pair(patch, live);
	if ("g" in patch) _update_seed(live, $on_seed, patch["g"]);
	_update_scope(patch, live);
};
const _merge$1 = _resume("d2", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("o" in patch) _update_seed(live, $count_seed, patch["o"]);
	_update_scope(patch, live);
	if ("e" in patch) _merge$1(patch["e"], live["e"]);
};
const _merge = _resume("a2", $update);
function createPatch() {
	return createPatch$1(_merge);
}
