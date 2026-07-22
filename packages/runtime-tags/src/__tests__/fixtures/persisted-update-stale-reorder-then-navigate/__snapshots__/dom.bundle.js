// template.marko.persisted.mjs
_enable_catch();
const $await_content__setup = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope._._, $scope._._.j + 1);
}));
const $n = _var_resume("a9", /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.j + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $n_seed = _update_signal("a9");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $await_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$await_content_holes($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a3");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $n_seed, $patch["j"]);
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	$_holes($patch, $live);
	if ("Ad" in $patch) _update_branch($patch, $live, "d", $try_content__update, "a6", "a4");
};
const $noop_update = () => {};
_update_content("a4", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a4", "fetching…", "b");
const $await_content__setup = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope._._, $scope._._.j + 1);
}));
const $n = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.j + 1);
}));
