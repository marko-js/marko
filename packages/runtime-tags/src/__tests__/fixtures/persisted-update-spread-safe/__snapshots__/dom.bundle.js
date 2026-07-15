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
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $attrs_seed, _patch["i"]);
	if ("k" in _patch) _update_seed(_live, $count_seed, _patch["k"]);
	if ("h" in _patch) $input_title_update(_live, _patch["h"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("a5", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
