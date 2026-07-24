// template.marko
const $Local_content__b = ($scope, b) => _text($scope.b, b);
const $Local_content__y__OR__$b = /*@__PURE__*/ _or(5, ($scope) => $Local_content__b($scope, void 0 !== $scope.e ? $scope.e : $scope._.g + 100));
const $Local_content__y = /*@__PURE__*/ _closure_get(8, $Local_content__y__OR__$b);
const $for_content__label = ($scope, label) => _text($scope.a, label);
const $for_content__x__OR__$label = /*@__PURE__*/ _or(4, ($scope) => $for_content__label($scope, void 0 !== $scope.d ? $scope.d : $scope._.f));
const $for_content__x = /*@__PURE__*/ _for_closure(2, $for_content__x__OR__$label);
const $child_content__b = ($scope, b) => _text($scope.b, b);
const $child_content__x__OR__$b = /*@__PURE__*/ _or(5, ($scope) => $child_content__b($scope, void 0 !== $scope.e ? $scope.e : $scope._.f * 10));
const $child_content__x = /*@__PURE__*/ _closure_get(7, $child_content__x__OR__$b);
const $x__closure = /*@__PURE__*/ _closure($child_content__x);
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	$x__closure($scope);
	$for_content__x($scope);
});
const $y = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($Local_content__y));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.d, "click", function() {
		$x($scope, $scope.f + 1);
	});
	_on($scope.e, "click", function() {
		$y($scope, $scope.g + 1);
	});
});
