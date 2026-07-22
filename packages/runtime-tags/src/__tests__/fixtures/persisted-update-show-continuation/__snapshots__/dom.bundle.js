// template.marko.persisted.mjs
const $n = _var_resume("a2", /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qe": /*@__PURE__*/ _update_text("e"),
	"Qf": /*@__PURE__*/ _update_text("f")
});
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	$_holes($patch, $live);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $n = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n));
const $setup__script = _script_update("a1", ($scope) => _on($scope.b, "click", function() {
	$n($scope, $scope.n + 1);
}));
