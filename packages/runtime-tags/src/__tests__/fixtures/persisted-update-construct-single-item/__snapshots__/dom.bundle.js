// template.marko.persisted.mjs
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $count_seed = _update_signal("a6");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a2");
const $for_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_for($patch["Aa"], $live["Aa"], $for_content2_holes, $live, "Aa", "a1");
};
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
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
