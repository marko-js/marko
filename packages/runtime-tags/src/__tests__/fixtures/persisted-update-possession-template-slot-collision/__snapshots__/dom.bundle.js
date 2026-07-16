// tags/child.marko
enableBranchesPersisted();

// template.marko
const $globalnativeTag_content = _content_resume("a3", "dynamic", "b");
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranchesPersisted();

// tags/child.marko.persisted.mjs
const $for_content_holes$1 = /*@__PURE__*/ _update_scopes({
	"Ndata-child:a": /*@__PURE__*/ _update_named_attr("a", "data-child"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_update$1 = _update_for_keyed(0, ($p, $l) => $for_content_holes$1($p, $l));
const $update2$1 = (_patch, _live) => {
	if ("Aa" in _patch) $for_update$1(_live, [_patch["Aa"], "M"]);
};
const _merge$1 = _resume("b2", $update2$1);
_update_content("b", _merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a6");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content_holes($p, $l));
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	if ("Ac" in _patch) $for_update(_live, [_patch["Ac"], "M"]);
	if ("d" in _patch) _merge$1(_patch["d"], _live["d"]);
	if ("De" in _patch || "Ae" in _patch) _update_dynamic(_patch, _live, "De", "Ae");
};
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
