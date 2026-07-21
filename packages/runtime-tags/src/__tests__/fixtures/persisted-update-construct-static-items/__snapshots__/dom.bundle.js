// template.marko.persisted.mjs
_enable_catch();
const $clicks = _var_resume("a16", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.d + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l), "a4");
const $clicks_seed = _update_signal("a16");
const $await_content__update = ($patch, $live) => {
	if ("c" in $patch) $live["c"] = $patch["c"];
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a5");
};
const $Ratings_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a8", "a6");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $clicks_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
const $noop_update = () => {};
_update_content("a6", $noop_update);
_update_content("a9", $Ratings_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a6", "loading ratings…", "b");
const $clicks = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.d + 1);
}));
