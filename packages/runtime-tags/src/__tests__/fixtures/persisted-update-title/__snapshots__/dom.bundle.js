// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
const $count_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"NtextContent:c": /*@__PURE__*/ _update_attr("c", _text_content),
	"Qd": /*@__PURE__*/ _update_text("d")
});
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("e" in _patch) _update_seed(_live, $count_seed, _patch["e"]);
	$_holes(_patch, _live);
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
