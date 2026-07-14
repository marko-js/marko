// tags/child.marko
enableBranchesPersisted();

// template.marko
const $input_title__OR__attrs__script = _script_update("a1", ($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.b, $scope.k));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.k + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $attrs_seed = _update_signal("a2");
const $count_seed = _update_signal("a3");
const $input_title_update = _update_signal("a4");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("i" in patch) _update_seed(live, $attrs_seed, patch["i"]);
	if ("k" in patch) _update_seed(live, $count_seed, patch["k"]);
	if ("h" in patch) $input_title_update(live, patch["h"]);
	_update_scope(patch, live);
};
const _merge = _resume("a5", $update);
function createPatch() {
	return createPatch$1(_merge);
}
