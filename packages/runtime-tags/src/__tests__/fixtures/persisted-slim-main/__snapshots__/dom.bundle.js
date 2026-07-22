// template.marko.persisted.mjs
const $count = _var_resume("a16", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
const $if_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $else_content_holes = /*@__PURE__*/ _update_scopes({
	"Nhref:a": /*@__PURE__*/ _update_named_attr("a", "href"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content2_holes($p, $l), "a3");
const $for_update2 = _update_for_keyed(1, ($p2, $l2) => $for_content__update($p2, $l2), "a6");
const $count_seed = _update_signal("a16");
const $for_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [$if_content2_holes, $else_content_holes], ["a5", "a4"]);
};
const $if_content__update = ($patch, $live) => {
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
	if ("Ab" in $patch) $for_update2($live, [$patch["Ab"], "M"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("l" in $patch) _update_seed($live, $count_seed, $patch["l"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("k" in $patch) $live["k"] = $patch["k"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update, 0], ["a8", "a7"]);
};
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
