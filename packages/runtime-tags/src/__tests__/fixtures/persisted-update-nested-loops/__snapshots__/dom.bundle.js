// template.marko.persisted.mjs
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
const $for_content3_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_content2_holes = /*@__PURE__*/ _update_scopes({
	"Nclass:a": /*@__PURE__*/ _update_attr("a", _attr_class),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(1, ($p, $l) => $for_content2_holes($p, $l), "a1");
const $count_seed = _update_signal("a10");
const $if_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_for($patch["Aa"], $live["Aa"], $for_content3_holes, $live, "Aa", "a3");
};
const $for_content__update = ($patch, $live) => {
	$for_content_holes($patch, $live);
	if ("Ab" in $patch) $for_update($live, [$patch["Ab"], "M"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("Ac" in $patch) _update_for($patch["Ac"], $live["Ac"], $for_content__update, $live, "Ac", "a2");
	if ("Dd" in $patch) _update_if($patch, $live, "Dd", "Ad", [$if_content__update], ["a6"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
