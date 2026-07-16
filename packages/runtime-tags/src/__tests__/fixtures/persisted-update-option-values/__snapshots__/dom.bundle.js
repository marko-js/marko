// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Nvalue:a": /*@__PURE__*/ _update_named_attr("a", "value"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $count_seed = _update_signal("a4");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content_holes($p, $l));
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $count_seed, _patch["g"]);
	if ("Ac" in _patch) $for_update(_live, [_patch["Ac"], "M"]);
};
const _merge = _resume("a2", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
