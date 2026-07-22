// template.marko.persisted.mjs
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
}));
const $setup__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
_resume("a4", ($scope) => () => {
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $count_seed = _update_signal("a3");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Nhref:b": /*@__PURE__*/ _update_named_attr("b", "href")
});
const $globals_update = _update_signal("a4");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	$_holes($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
	$globals_update($live);
};
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
