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
const $update$2 = (patch, live) => {
	if ("Da" in patch || "Aa" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const _merge$2 = _resume("b1", $update$2);

// tags/panel.marko.update.mjs
const $for_update = _update_for_keyed(2, (p, l) => $for_content__update(p, l));
const $for_content__update = (patch, live) => {
	if ("Da" in patch || "Aa" in patch) _update_dynamic(patch, live, "Da", "Aa");
};
const $update$1 = (patch, live) => {
	if ("Da" in patch || "Aa" in patch) _update_dynamic(patch, live, "Da", "Aa");
	if ("Db" in patch || "Ab" in patch) _update_dynamic(patch, live, "Db", "Ab");
	if ("Ac" in patch) $for_update(live, [patch["Ac"], "M"]);
};
const _merge$1 = _resume("c4", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $body_content__update = (patch, live) => {
	if ("a" in patch) _merge$2(patch["a"], live["a"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("h" in patch) _update_seed(live, $count_seed, patch["h"]);
	if ("c" in patch) _merge$1(patch["c"], live["c"]);
};
_update_content("a4", _update_scope);
_update_content("a3", $body_content__update);
_update_content("a2", _update_scope);
const _merge = _resume("a6", $update);
function createPatch() {
	return createPatch$1(_merge);
}
