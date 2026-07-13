// tags/badge.marko
enableBranchesPersisted();

// tags/card.marko
enableBranchesPersisted();

// tags/counter.marko
const $n = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script_update("d0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
enableBranchesPersisted();

// tags/widget.marko
enableBranchesPersisted();

// template.marko
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
enableBranchesPersisted();

// tags/counter.marko.update.mjs
const $n_seed = _update_signal("d1");
const $update$2 = (patch, live) => {
	_update_pair(patch, live);
	if ("c" in patch) _update_seed(live, $n_seed, patch["c"]);
};
const _merge$2 = _resume("d2", $update$2);

// tags/widget.marko.update.mjs
const $update$1 = (patch, live) => {
	_update_scope(patch, live);
	if ("b" in patch) _merge$2(patch["b"], live["b"]);
};
const _merge$1 = _resume("e0", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("l" in patch) _update_seed(live, $count_seed, patch["l"]);
	_update_scope(patch, live);
	if ("d" in patch) _merge$1(patch["d"], live["d"]);
};
const _merge = _resume("a2", $update);
function createPatch() {
	return createPatch$1(_merge);
}
