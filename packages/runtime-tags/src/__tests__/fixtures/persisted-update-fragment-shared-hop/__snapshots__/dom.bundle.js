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
const $update$2 = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const _merge$2 = _resume("c1", $update$2);

// tags/frame.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("Da" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const _merge$1 = _resume("b1", $update$1);

// template.marko.update.mjs
const $tally_seed = _update_signal("a5");
const $count_seed = _update_signal("a2");
const $Dashboard_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $tally_seed, patch["d"]);
	_update_scope(patch, live);
};
const $frame_content__update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) _merge$2(patch["c"], live["c"]);
};
const $update = (patch, live) => {
	if ("a" in patch) _merge$1(patch["a"], live["a"]);
};
_update_content("a6", $Dashboard_content__update);
_update_content("a3", $frame_content__update);
const _merge = _resume("a7", $update);
function createPatch() {
	return createPatch$1(_merge);
}
