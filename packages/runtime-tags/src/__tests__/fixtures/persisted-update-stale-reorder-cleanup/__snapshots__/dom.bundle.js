// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "fetching…", "b");
const $n = /*@__PURE__*/ _let_persisted(8);
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.i + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $n_seed = _update_signal("a2");
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", _update_scope);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $n_seed, _patch["i"]);
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("h" in _patch) _live["h"] = _patch["h"];
	_update_scope(_patch, _live);
	if ("Ac" in _patch) _update_branch(_patch, _live, "c", $try_content__update);
};
const _merge = _resume("a5", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
