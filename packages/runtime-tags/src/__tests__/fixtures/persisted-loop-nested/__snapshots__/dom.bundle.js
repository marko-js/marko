// template.marko
const $for_content2__input_note = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.c, $scope._._.f), ($scope) => $scope._._), _closure);
const $for_content2__setup = ($scope) => {
	$for_content2__input_note($scope);
	$for_content2__o._($scope);
};
const $for_content2__o = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.c));
const $for_content2__i = ($scope, i) => _text($scope.b, i);
const $for_content2__$params = ($scope, $params3) => $for_content2__i($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of(0, "<div><!><!>: <!></div>", "D%b%c%", $for_content2__setup, $for_content2__$params);
const $for_content__inner = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__for($scope, [$scope._.h]));
const $for_content__setup = $for_content__inner;
const $for_content__$params = ($scope, $params2) => $for_content__o($scope, $params2[0]);
const $for_content__o = /*@__PURE__*/ _const(2, $for_content2__o);
const $for = /*@__PURE__*/ _for_of(0, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $outer = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g]));
const $inner = /*@__PURE__*/ _let(7, $for_content__inner);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$outer($scope, [...$scope.g, "b"]);
	});
	_on($scope.c, "click", function() {
		$inner($scope, [...$scope.h, "y"]);
	});
});
