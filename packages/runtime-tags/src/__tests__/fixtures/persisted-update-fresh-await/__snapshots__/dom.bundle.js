// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a16", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l), "a3");
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a16");
const $await_content__update = ($patch, $live) => {
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a4");
};
const $if_content__update = ($patch, $live) => {
	$if_content_holes($patch, $live);
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a7", "a5");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update, 0], ["a9", "a8"]);
};
const $noop_update = () => {};
_update_content("a5", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "loading reviews…", "b");
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
