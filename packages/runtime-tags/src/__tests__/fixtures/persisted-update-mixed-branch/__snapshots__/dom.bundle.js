// template.marko
const $else_content__setup__script = _script_update("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = /*@__PURE__*/ _let_persisted(5, $else_content__count);

// template.marko.persisted.mjs
const $else_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(5, $else_content__count));
const $else_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a5");
const $else_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	$else_content_holes(_patch, _live);
};
const $update2 = (_patch, _live) => {
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("Da" in _patch) _update_if(_patch, _live, "Da", "Aa", [0, $else_content__update]);
};
const _merge = _resume("a3", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
