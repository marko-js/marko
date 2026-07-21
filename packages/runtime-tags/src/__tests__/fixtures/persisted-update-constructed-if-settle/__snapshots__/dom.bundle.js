// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a22", /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.j + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $else_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a22");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a7");
};
const $else_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [$if_content_holes, $else_content2_holes], ["a5", "a4"]);
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a10", "a8");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("j" in $patch) _update_seed($live, $count_seed, $patch["j"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	$_holes($patch, $live);
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [0, $else_content__update], ["a12", "a11"]);
};
const $noop_update = () => {};
_update_content("a8", $noop_update);
const $merge = _resume("a3", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a8", "loading extras…", "b");
const $count = /*@__PURE__*/ _let_persisted(9, ($scope) => _text($scope.c, $scope.j));
const $setup__script = _script_update("a13", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.j + 1);
}));
