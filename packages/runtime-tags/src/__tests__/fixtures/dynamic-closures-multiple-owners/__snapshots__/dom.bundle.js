// template.marko
const $wrap_content3__x = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "a2");
const $wrap_content2__x = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a0");
const $wrap_content2__x2 = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._.e), 0, "a0");
const $wrap_content__x = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._.e), 0, "a5");
const $wrap_content__x2 = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($wrap_content2__x2, $wrap_content3__x));
const $wrap_content__setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$wrap_content__x2($scope, +$scope.e + 1);
}));
const $x__closure = /*@__PURE__*/ _closure($wrap_content__x, $wrap_content2__x);
const $x = /*@__PURE__*/ _let(4, ($scope) => {
	$z($scope, $scope.e);
	$x__closure($scope);
});
const $z = ($scope) => {
	_text($scope.b, $scope.e);
	_text($scope.c, $scope.e);
};
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$x($scope, +$scope.e + 1);
}));
