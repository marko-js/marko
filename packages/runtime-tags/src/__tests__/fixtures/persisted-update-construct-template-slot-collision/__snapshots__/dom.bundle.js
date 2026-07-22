// tags/child.marko.persisted.mjs
const $for_content_holes$1 = /*@__PURE__*/ _update_scopes({
	"Ndata-child:a": /*@__PURE__*/ _update_named_attr("a", "data-child"),
	"Qb": /*@__PURE__*/ _update_text("b")
});
const $for_update$1 = _update_for_keyed(0, ($p, $l) => $for_content_holes$1($p, $l), "b1");
const $update2$1 = ($patch, $live) => {
	if ("Aa" in $patch) $for_update$1($live, [$patch["Aa"], "M"]);
};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a7");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content_holes($p, $l), "a2");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
	if ("d" in $patch) $merge$1($patch["d"], $live["d"]);
	if ("De" in $patch || "Ae" in $patch) _update_dynamic($patch, $live, "De", "Ae");
};
const $noop_update = () => {};
_update_content("a3", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $globalnativeTag_content = _content_resume("a3", "dynamic", "b");
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
