// template.marko.persisted.mjs
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot"));
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_resume("a5", ($scope) => () => {
	_attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot");
});
const $if_content_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_attr("a", _attr_class)),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $globals_update = _update_signal("a5");
const $count_seed = _update_signal("a4");
const $if_content__update = ($patch, $live) => {
	$if_content_holes($patch, $live);
	$globals_update($live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [$if_content__update], ["a2"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(3, 0, ($scope) => _attr_class($scope.a, $scope._.g && $scope.$.params.tag && "hot"));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
