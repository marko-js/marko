// template.marko.persisted.mjs
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.e, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));
const $count_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $construct = ($scope) => {
	_text($scope.e, $scope.i);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	$_holes($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.e, $scope.i));
const $setup__script = _script_update("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));
