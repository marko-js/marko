// tags/roster.marko.persisted.mjs
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content_holes($p, $l), "c1");
const $update2$1 = ($patch, $live) => {
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
const $merge$2 = _resume("c0", $update2$1);
_update_content("c", $merge$2);

// tags/digest.marko.persisted.mjs
const $merge$1 = _resume("b0", /* @__PURE__ */ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qb": /*@__PURE__*/ _update_text("b")
}));
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.n + 1);
}));
const $count_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $count_seed, $patch["n"]);
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("l" in $patch) $live["l"] = $patch["l"];
	$_holes($patch, $live);
	if ("Dd" in $patch || "Ad" in $patch) _update_dynamic($patch, $live, "Dd", "Ad");
	if ("De" in $patch || "Ae" in $patch) _update_dynamic($patch, $live, "De", "Ae");
};
const $merge = _resume("a2", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n));
const $setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.n + 1);
}));
