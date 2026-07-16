// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "loading reviews…", "b");
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a11", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l));
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a11");
const $await_content__update = (_patch, _live) => {
	if ("Aa" in _patch) $for_update(_live, [_patch["Aa"], "M"]);
};
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content__update);
};
const $if_content__update = (_patch, _live) => {
	$if_content_holes(_patch, _live);
	if ("Ab" in _patch) _update_branch(_patch, _live, "b", $try_content__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("f" in _patch) _live["f"] = _patch["f"];
	if ("Dc" in _patch) _update_if(_patch, _live, "Dc", "Ac", [$if_content__update, 0]);
};
const _merge = _resume("a8", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
