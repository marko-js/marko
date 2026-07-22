// tags/price.marko.persisted.mjs
const $merge$1 = _resume("b0", /* @__PURE__ */ _update_scopes({
	"Ntitle:a": /*@__PURE__*/ _update_named_attr("a", "title"),
	"Qb": /*@__PURE__*/ _update_text("b")
}));
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = _var_resume("a7", /*@__PURE__*/ _let_persisted(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
const $input_product_featured = _var_resume("a8", /*@__PURE__*/ _const_persisted(11, $input_product_featured__OR__expanded));
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $expanded_seed = _update_signal("a7");
const $input_product_featured_update = _update_signal("a8");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Nhref:b": /*@__PURE__*/ _update_named_attr("b", "href")
});
const $for_update = _update_for_keyed(5, ($p, $l) => $for_content__update($p, $l), "a3");
const $for_content__update = ($patch, $live) => {
	$for_content_holes($patch, $live);
	if ("a" in $patch) $merge$1($patch["a"], $live["a"]);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("p" in $patch) _update_seed($live, $expanded_seed, $patch["p"]);
	if ("l" in $patch) $input_product_featured_update($live, $patch["l"]);
	if ("n" in $patch) $live["n"] = $patch["n"];
	$_holes($patch, $live);
	if ("De" in $patch) _update_if($patch, $live, "De", "Ae", [$if_content_holes], ["a2"]);
	if ("Af" in $patch) $for_update($live, [$patch["Af"], "M"]);
};
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = /*@__PURE__*/ _let_persisted(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
});
const $setup__script = _script_update("a4", ($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
