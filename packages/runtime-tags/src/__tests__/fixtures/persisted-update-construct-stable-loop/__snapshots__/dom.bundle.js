// template.marko.persisted.mjs
const $count = _var_resume("a11", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a11");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a5");
const $for_content2__update = ($patch, $live) => {
	$for_content2_holes($patch, $live);
	if ("Db" in $patch || "Ab" in $patch) _update_dynamic($patch, $live, "Db", "Ab");
};
const $for_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_for($patch["Aa"], $live["Aa"], $for_content2__update, $live, "Aa", "a4");
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	if ("d" in $patch) $live["d"] = $patch["d"];
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $PanelB_content = _content_resume("a3", "<strong>B</strong>", "b");
const $PanelA_content = _content_resume("a2", "<strong>A</strong>", "b");
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
