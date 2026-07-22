// template.marko.persisted.mjs
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot"));
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_resume("a7", ($scope) => () => {
	_attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot");
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $globals_update = _update_signal("a7");
const $count_seed = _update_signal("a6");
const $if_content__update = ($patch, $live) => {
	$if_content_holes($patch, $live);
	$globals_update($live);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Ac" in $patch) _update_for($patch["Ac"], $live["Ac"], $for_content_holes, $live, "Ac", "a1");
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [$if_content__update], ["a4"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot"));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
