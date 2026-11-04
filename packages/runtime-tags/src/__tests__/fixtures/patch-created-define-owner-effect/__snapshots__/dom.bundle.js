// tags/card.marko
const $Panel_content__input_w__OR__k__script = _script("b1", ($scope) => console.log("k", $scope._.g, $scope._.f));
const $Panel_content__input_w__OR__k = /*@__PURE__*/ _or_patch("b3", 0, $Panel_content__input_w__OR__k__script);
const $Panel_content__k = /*@__PURE__*/ _closure_get_patch("b4", 8, $Panel_content__input_w__OR__k);
const $k = /*@__PURE__*/ _fill_let("b7", 6, /* @__PURE__ */ _closure($Panel_content__k));
const $setup__script = _script("b5", ($scope) => _on($scope.b, "click", function() {
	$k($scope, +$scope.g + 1);
}));
