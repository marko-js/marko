// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
const $await_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a10");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a2");
};
const $construct = ($scope) => {
	_text($scope.c, $scope.k);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $count_seed, $patch["k"]);
	$_holes($patch, $live);
	if ("Ad" in $patch) _update_branch($patch, $live, "d", $try_content__update, "a5", "a3");
	if ("Ae" in $patch) _update_branch($patch, $live, "e", $await_content2_holes, "a6");
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "loading related…", "b");
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));
