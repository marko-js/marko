// template.marko
const $Local_content__b = ($scope, b) => _text($scope.b, b);
const $Local_content__y__OR__$b = /*@__PURE__*/ _or(5, ($scope) => $Local_content__b($scope, void 0 !== $scope.e ? $scope.e : $scope._.f + 100));
const $Local_content__y = /*@__PURE__*/ _closure_get(5, $Local_content__y__OR__$b);
const $child_content__b = ($scope, b) => _text($scope.b, b);
const $child_content__x__OR__$b = /*@__PURE__*/ _or(5, ($scope) => $child_content__b($scope, void 0 !== $scope.e ? $scope.e : $scope._.e * 10));
const $child_content__x = /*@__PURE__*/ _closure_get(4, $child_content__x__OR__$b);
const $x = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($child_content__x));
const $y = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($Local_content__y));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.c, "click", function() {
		$x($scope, $scope.e + 1);
	});
	_on($scope.d, "click", function() {
		$y($scope, $scope.f + 1);
	});
});
