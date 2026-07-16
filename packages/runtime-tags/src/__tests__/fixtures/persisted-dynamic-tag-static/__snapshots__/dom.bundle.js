// template.marko.persisted.mjs
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count_seed = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qd": /*@__PURE__*/ _update_text("d") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("e" in _patch) _update_seed(_live, $count_seed, _patch["e"]);
	$_holes(_patch, _live);
};
const _merge = _resume("a1", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}

// template.marko
const $Wrapper_content = _content_resume("a0", "badge", "b");
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
enableBranchesPersisted();
