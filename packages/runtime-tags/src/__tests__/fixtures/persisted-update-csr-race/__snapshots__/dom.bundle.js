// template.marko.persisted.mjs
_enable_catch();
const $await_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a2");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $count_seed = _update_signal("a10");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a3");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
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
const $placeholder_content = _content_resume("a4", "loading…", "b");
const $await_content__count = /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._._.i), ($scope) => $scope._._, "a2");
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => {
	_text($scope.c, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script_update("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
