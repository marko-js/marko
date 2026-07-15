// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "loading related…", "b");
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $for_update = _update_for_keyed(0, ($p, $l) => _update_scope($p, $l));
const $count_seed = _update_signal("a2");
const $await_content__update = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("k" in _patch) _update_seed(_live, $count_seed, _patch["k"]);
	_update_scope(_patch, _live);
	if ("Ad" in _patch) _update_branch(_patch, _live, "d", $try_content__update);
	if ("Ae" in _patch) _update_branch(_patch, _live, "e", _update_scope);
};
const _merge = _resume("a6", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
