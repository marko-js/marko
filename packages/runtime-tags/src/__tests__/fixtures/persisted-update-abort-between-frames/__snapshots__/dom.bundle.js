// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a14", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a14");
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a4");
};
const $Reports_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a7", "a5");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a8", $Reports_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "<p class=loading>loading…</p>", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
