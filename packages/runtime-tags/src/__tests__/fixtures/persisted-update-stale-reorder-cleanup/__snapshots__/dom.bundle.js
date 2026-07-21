// template.marko.persisted.mjs
_enable_catch();
const $n = _var_resume("a9", /*@__PURE__*/ _let_persisted(8));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.i + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $n_seed = _update_signal("a9");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a2");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $n_seed, $patch["i"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("h" in $patch) $live["h"] = $patch["h"];
	$_holes($patch, $live);
	if ("Ac" in $patch) _update_branch($patch, $live, "c", $try_content__update, "a5", "a3");
};
const $noop_update = () => {};
_update_content("a3", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a3", "fetching…", "b");
const $n = /*@__PURE__*/ _let_persisted(8);
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.i + 1);
}));
