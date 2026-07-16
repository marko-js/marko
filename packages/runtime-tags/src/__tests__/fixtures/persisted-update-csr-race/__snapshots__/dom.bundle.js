// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "loading…", "b");
const $await_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a5");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script_update("a6", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
_enable_catch();
const $await_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a5");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $count_seed = _update_signal("a7");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content_holes);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $count_seed, _patch["i"]);
	$_holes(_patch, _live);
	if ("Ad" in _patch) _update_branch(_patch, _live, "d", $try_content__update);
};
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
