// template.marko
_enable_catch();
const $placeholder_content2 = _content_resume("a10", "<p class=sub>detail…</p>", "b");
const $placeholder_content = _content_resume("a7", "<p class=loading>summary…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $try_content2__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", _update_scope);
};
const $await_content__update = (_patch, _live) => {
	_update_scope(_patch, _live);
	if ("Ab" in _patch) _update_branch(_patch, _live, "b", $try_content2__update);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $Reports_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $try_content__update);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
_update_content("a5", $Reports_content__update);
const _merge = _resume("a11", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
