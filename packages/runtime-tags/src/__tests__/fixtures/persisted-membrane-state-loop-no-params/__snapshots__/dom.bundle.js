// template.marko.persisted.mjs
const $for = /*@__PURE__*/ _for_of(1, "<li>row</li>", "b");
const $items = _var_resume("a4", /*@__PURE__*/ _let_persisted(2, ($scope) => $for($scope, [$scope.c])));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, "x"]);
}));
const $items_seed = _update_signal("a4");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $items_seed, $patch["c"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for = /*@__PURE__*/ _for_of(1, "<li>row</li>", "b");
const $items = /*@__PURE__*/ _let_persisted(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, "x"]);
}));
