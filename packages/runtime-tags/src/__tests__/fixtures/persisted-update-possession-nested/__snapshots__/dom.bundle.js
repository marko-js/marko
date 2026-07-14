// tags/shell.marko
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// tags/shell.marko.update.mjs
const $update$1 = (patch, live) => {
	if ("Da" in patch || "Aa" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const _merge$1 = _resume("b1", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $Page_content__update = (patch, live) => {
	if ("Da" in patch || "Aa" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("c" in patch) _merge$1(patch["c"], live["c"]);
};
_update_content("a5", _update_scope);
_update_content("a4", $Page_content__update);
_update_content("a2", _update_scope);
const _merge = _resume("a6", $update);
function createPatch() {
	return createPatch$1(_merge);
}
