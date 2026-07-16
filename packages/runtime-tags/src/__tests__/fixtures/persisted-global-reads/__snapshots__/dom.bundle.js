// template.marko
const $if_content__setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 10);
}));
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a4", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
enableBranchesPersisted();

// template.marko.persisted.mjs
const $if_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 10);
}));
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
}));
const $setup__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
_resume("a6", ($scope) => () => {
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a5");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Nhref:b": /*@__PURE__*/ _update_named_attr("b", "href")
});
const $globals_update = _update_signal("a6");
const $if_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	$if_content_holes(_patch, _live);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("f" in _patch) _update_seed(_live, $count_seed, _patch["f"]);
	$_holes(_patch, _live);
	if ("De" in _patch) _update_if(_patch, _live, "De", "Ae", [$if_content__update]);
	$globals_update(_live);
};
const _merge = _resume("a2", $update2);
_update_content("a", _merge);
function _patch2() {
	return patch(_merge);
}
