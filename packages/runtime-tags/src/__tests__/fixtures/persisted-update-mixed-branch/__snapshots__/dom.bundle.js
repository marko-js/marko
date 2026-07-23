// template.marko.persisted.mjs
const $else_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(5, $else_content__count));
const $else_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a7");
const $else_content__construct = ($scope) => {
	_text($scope.a, $scope._.e);
	_text($scope.c, $scope._.f);
};
const $else_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$else_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [0, $else_content__update], ["a4", "a3"]);
};
_construct("a3", $else_content__construct);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $else_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $else_content__count = /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.c, $scope._.f));
const $count = /*@__PURE__*/ _let_persisted(5, $else_content__count);
