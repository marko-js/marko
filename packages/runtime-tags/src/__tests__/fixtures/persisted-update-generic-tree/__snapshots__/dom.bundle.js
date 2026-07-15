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
const $update$2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("c" in _patch) _update_seed(_live, $n_seed, _patch["c"]);
};
const _merge$2 = _resume("d2", $update$2);
_update_content("d", _merge$2);

// tags/widget.marko.update.mjs
const $update$1 = (_patch, _live) => {
	_update_scope(_patch, _live);
	if ("b" in _patch) _merge$2(_patch["b"], _live["b"]);
};
const _merge$1 = _resume("e0", $update$1);
_update_content("e", _merge$1);

// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("l" in _patch) _update_seed(_live, $count_seed, _patch["l"]);
	_update_scope(_patch, _live);
	if ("d" in _patch) _merge$1(_patch["d"], _live["d"]);
};
const _merge = _resume("a2", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
