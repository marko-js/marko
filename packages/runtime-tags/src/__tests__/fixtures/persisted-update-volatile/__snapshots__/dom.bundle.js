// template.marko
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.e, $scope.i));
const $setup__script = _script_update("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.e, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));
const $count_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $count_seed, _patch["i"]);
	$_holes(_patch, _live);
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
