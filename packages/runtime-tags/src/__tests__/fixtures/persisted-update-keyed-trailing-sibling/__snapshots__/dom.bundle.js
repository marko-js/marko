// template.marko.persisted.mjs
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $count_seed = _update_signal("a4");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content_holes($p, $l), "a1");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
