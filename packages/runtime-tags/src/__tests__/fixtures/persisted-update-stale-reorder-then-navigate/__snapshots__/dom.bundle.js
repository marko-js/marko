// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "fetching…", "b");
const $await_content__setup = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$n($scope._._, $scope._._.j + 1);
}));
const $n = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.j + 1);
}));

// template.marko.persisted.mjs
_enable_catch();
const $await_content__setup = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope._._, $scope._._.j + 1);
}));
const $n = _var_resume("a7", /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.j + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $n_seed = _update_signal("a7");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $await_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	$await_content_holes(_patch, _live);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("j" in _patch) _update_seed(_live, $n_seed, _patch["j"]);
	if ("h" in _patch) _live["h"] = _patch["h"];
	if ("i" in _patch) _live["i"] = _patch["i"];
	$_holes(_patch, _live);
	if ("Ad" in _patch) _update_branch(_patch, _live, "d", $try_content__update);
};
const $noop_update = () => {};
_update_content("a3", $noop_update);
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
