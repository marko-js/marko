// template.marko
const $PanelB_content = _content_resume("a5", "<strong>B</strong>", "b");
const $PanelA_content = _content_resume("a2", "<strong>A</strong>", "b");
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));

// template.marko.persisted.mjs
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a8");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l));
const $for_content2__update = (_patch, _live) => {
	$for_content2_holes(_patch, _live);
	if ("Db" in _patch || "Ab" in _patch) _update_dynamic(_patch, _live, "Db", "Ab");
};
const $for_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_for(_patch["Aa"], _live["Aa"], $for_content2__update);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	if ("d" in _patch) _live["d"] = _patch["d"];
	if ("e" in _patch) _live["e"] = _patch["e"];
	if ("Ac" in _patch) $for_update(_live, [_patch["Ac"], "M"]);
};
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a2", $noop_update);
const _merge = _resume("a6", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
