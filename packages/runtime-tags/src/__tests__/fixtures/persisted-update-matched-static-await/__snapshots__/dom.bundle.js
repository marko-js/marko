// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a24", /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.c, $scope.i)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $count_seed = _update_signal("a24");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $try_content2__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", 0, "a4");
};
const $await_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_for($patch["Aa"], $live["Aa"], $for_content_holes, $live, "Aa", "a9");
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a10");
};
const $else_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content2__update, "a7", "a5");
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a13", "a11");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("i" in $patch) _update_seed($live, $count_seed, $patch["i"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	$_holes($patch, $live);
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [0, $else_content__update], ["a15", "a14"]);
};
const $noop_update = () => {};
_update_content("a11", $noop_update);
_update_content("a5", $noop_update);
const $merge = _resume("a3", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content2 = _content_resume("a11", "loading reviews…", "b");
const $placeholder_content = _content_resume("a5", "loading deals…", "b");
const $count = /*@__PURE__*/ _let_persisted(8, ($scope) => _text($scope.c, $scope.i));
const $setup__script = _script_update("a16", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.i + 1);
}));
