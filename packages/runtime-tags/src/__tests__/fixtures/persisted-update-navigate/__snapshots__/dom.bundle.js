// tags/price.marko
enableBranchesPersisted();

// template.marko
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = /*@__PURE__*/ _let_persisted(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $expanded_seed = _update_signal("a3");
const $input_product_featured_update = _update_signal("a4");
const $for_update = _update_for_keyed(5, ($p, $l) => _update_scope($p, $l));
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("p" in _patch) _update_seed(_live, $expanded_seed, _patch["p"]);
	if ("l" in _patch) $input_product_featured_update(_live, _patch["l"]);
	if ("n" in _patch) _live["n"] = _patch["n"];
	_update_scope(_patch, _live);
	if ("De" in _patch) _update_if(_patch, _live, "De", "Ae", [_update_scope]);
	if ("Af" in _patch) $for_update(_live, [_patch["Af"], "M"]);
};
const _merge = _resume("a5", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
