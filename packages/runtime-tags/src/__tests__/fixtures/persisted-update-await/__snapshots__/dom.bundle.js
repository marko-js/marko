// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "loading related…", "b");
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a8", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));

// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l));
const $count_seed = _update_signal("a9");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content__update = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("k" in _patch) _update_seed(_live, $count_seed, _patch["k"]);
	$_holes(_patch, _live);
	if ("Ad" in _patch) _update_branch(_patch, _live, "d", $try_content__update);
	if ("Ae" in _patch) _update_branch(_patch, _live, "e", $await_content2_holes);
};
const $noop_update = () => {};
_update_content("a3", $noop_update);
const _merge = _resume("a7", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
