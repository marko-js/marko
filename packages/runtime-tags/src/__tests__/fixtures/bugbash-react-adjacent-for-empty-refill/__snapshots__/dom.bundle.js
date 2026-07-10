// template.marko
const $for_content2__x = ($scope, x) => _text($scope.a, x);
const $for_content2__$params = ($scope, $params3) => $for_content2__x($scope, $params3[0]);
const $for_content__x = ($scope, x) => _text($scope.a, x);
const $for_content__$params = ($scope, $params2) => $for_content__x($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<i>a<!></i>", "Db%l", 0, $for_content__$params);
const $a = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g, (x) => x]));
const $for2 = /*@__PURE__*/ _for_of(1, "<b>b<!></b>", "Db%l", 0, $for_content2__$params);
const $b = /*@__PURE__*/ _let(7, ($scope) => $for2($scope, [$scope.h, (x) => x]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$a($scope, []);
	});
	_on($scope.d, "click", function() {
		$a($scope, [3, 1]);
	});
	_on($scope.e, "click", function() {
		$a($scope, []);
		$b($scope, []);
	});
	_on($scope.f, "click", function() {
		$a($scope, [7]);
		$b($scope, [5, 6]);
	});
});
