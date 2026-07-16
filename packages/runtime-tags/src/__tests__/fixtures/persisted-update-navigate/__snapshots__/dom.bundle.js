// template.marko
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = /*@__PURE__*/ _let_persisted(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
});
const $setup__script = _script_update("a5", ($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));

// tags/price.marko.persisted.mjs
const _merge$1 = _resume("b0", /* @__PURE__ */ _update_scopes({
	"Ntitle:a": /*@__PURE__*/ _update_named_attr("a", "title"),
	"Qb": /*@__PURE__*/ _update_text("b")
}));
_update_content("b", _merge$1);

// template.marko.persisted.mjs
const $input_product_featured__OR__expanded = /*@__PURE__*/ _or(16, ($scope) => _attr_class($scope.e, $scope.p && $scope.l && "spotlight"));
const $expanded = _var_resume("a6", /*@__PURE__*/ _let_persisted(15, ($scope) => {
	_text($scope.d, $scope.p ? "Hide" : "Show");
	$input_product_featured__OR__expanded($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$expanded($scope, !$scope.p);
}));
const $input_product_featured = _var_resume("a7", /*@__PURE__*/ _const_persisted(11, $input_product_featured__OR__expanded));
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $if_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $expanded_seed = _update_signal("a6");
const $input_product_featured_update = _update_signal("a7");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Nhref:b": /*@__PURE__*/ _update_named_attr("b", "href")
});
const $for_update = _update_for_keyed(5, ($p, $l) => $for_content__update($p, $l));
const $for_content__update = (_patch, _live) => {
	$for_content_holes(_patch, _live);
	if ("a" in _patch) _merge$1(_patch["a"], _live["a"]);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("p" in _patch) _update_seed(_live, $expanded_seed, _patch["p"]);
	if ("l" in _patch) $input_product_featured_update(_live, _patch["l"]);
	if ("n" in _patch) _live["n"] = _patch["n"];
	$_holes(_patch, _live);
	if ("De" in _patch) _update_if(_patch, _live, "De", "Ae", [$if_content_holes]);
	if ("Af" in _patch) $for_update(_live, [_patch["Af"], "M"]);
};
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
