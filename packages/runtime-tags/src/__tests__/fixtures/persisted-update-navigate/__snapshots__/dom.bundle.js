// tags/price.marko.persisted.mjs
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = _var_resume("a3", /*@__PURE__*/ _let_persisted(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
const $input_product_featured = _var_resume("a4", /*@__PURE__*/ _const_persisted(11, $input_product_featured__OR__expanded));
const $expanded_seed = _update_signal("a3");
const $input_product_featured_update = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Nhref:b": /*@__PURE__*/ _update_named_attr("b", "href")
});
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("p" in $patch) _update_seed($live, $expanded_seed, $patch["p"]);
	if ("l" in $patch) $input_product_featured_update($live, $patch["l"]);
	if ("n" in $patch) $live["n"] = $patch["n"];
	$_holes($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
	if ("Df" in $patch) _update_region("f")($patch, $live);
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
const $setup__script = _script_update("a2", ($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
