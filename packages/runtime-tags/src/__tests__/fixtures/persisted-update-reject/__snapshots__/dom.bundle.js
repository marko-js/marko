// template.marko
_enable_catch();
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a5", "<p class=failed>failed: <!></p>", "Db%l", 0, $catch_content__$params);
const $placeholder_content = _content_resume("a4", "<p class=loading>loading…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", _update_scope);
};
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("Ac" in _patch) _update_branch(_patch, _live, "c", $try_content__update);
};
_update_content("a5", _update_scope);
const _merge = _resume("a6", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
