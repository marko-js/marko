// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "loading…", "b");
const $await_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a4");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", _update_scope);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $count_seed, _patch["i"]);
	_update_scope(_patch, _live);
	if ("Ad" in _patch) _update_branch(_patch, _live, "d", $try_content__update);
};
const _merge = _resume("a6", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
