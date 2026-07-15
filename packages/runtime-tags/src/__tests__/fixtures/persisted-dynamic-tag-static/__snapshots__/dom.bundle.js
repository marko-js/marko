// template.marko.update.mjs
const $count_seed = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("e" in _patch) _update_seed(_live, $count_seed, _patch["e"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("a3", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $Wrapper_content = _content_resume("a2", "badge", "b");
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
enableBranchesPersisted();
