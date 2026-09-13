// template.marko
_load_lazy("_a", () => import("./layout.mjs").then((n) => n.t).then(() => {}));
_load_lazy("_b", () => import("./page-a.mjs").then(() => {}));
_load_lazy("_c", () => import("./page-b.mjs").then(() => {}));

// layout.marko
var layout_exports = /* @__PURE__ */ __exportAll({
	$template: () => $template,
	$walks: () => $walks
});

// page-a.marko
const $n = /*@__PURE__*/ _fill_let("b0", 8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("b1", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.i + 1);
}));

// page-b.marko
const $card_content__count = /*@__PURE__*/ _init_closure_get("c5", 8, ($scope) => _text($scope.b, $scope._._.g), ($scope) => $scope._._);
const $count__closure = /*@__PURE__*/ _closure($card_content__count);
const $count = /*@__PURE__*/ _fill_let("c0", 6, ($scope) => {
	_text($scope.c, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("c2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
