// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a2", "loading…", "b");
const $x = /*@__PURE__*/ _let_persisted(8);
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.i + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
_enable_catch();
const $x = _var_resume("a6", /*@__PURE__*/ _let_persisted(8));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.i + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $x_seed = _update_signal("a6");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content_holes);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("i" in _patch) _update_seed(_live, $x_seed, _patch["i"]);
	if ("g" in _patch) _live["g"] = _patch["g"];
	if ("h" in _patch) _live["h"] = _patch["h"];
	$_holes(_patch, _live);
	if ("Ac" in _patch) _update_branch(_patch, _live, "c", $try_content__update);
};
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
