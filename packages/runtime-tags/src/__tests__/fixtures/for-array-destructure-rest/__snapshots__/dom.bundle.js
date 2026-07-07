// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content__first = ($scope, first) => _text($scope.b, first);
const $for_content__$temp_ = ($scope, $temp_1) => _text($scope.c, $temp_1);
const $for_content__$temp_2 = ($scope, $temp_2) => _text($scope.d, $temp_2);
const $for_content__rest_length = ($scope, rest_length) => _text($scope.e, rest_length);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2[0]);
const $for_content__$temp = ($scope, $temp) => {
	(([, ...rest]) => $for_content__rest($scope, rest))($temp);
	$for_content__first($scope, $temp[0]);
	$for_content__$temp_($scope, $temp[1]);
	$for_content__$temp_2($scope, $temp[2]);
};
const $for_content__rest = ($scope, rest) => $for_content__rest_length($scope, rest.length);
const $for = /*@__PURE__*/ _for_of(0, "<li><!>: first=<!> rest0=<!> rest1=<!> len=<!></li>", "D%c%c%c%c%l", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, [[
		7,
		8,
		9,
		10
	]]);
}));
