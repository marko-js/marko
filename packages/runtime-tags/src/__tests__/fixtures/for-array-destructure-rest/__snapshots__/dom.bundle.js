// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2[0]);
const $for_content__$temp = ($scope, $temp) => {
	$for_content__rest($scope, (([, ...rest]) => rest)($temp));
	_text($scope.b, $temp[0]);
	_text($scope.c, $temp[1]);
	_text($scope.d, $temp[2]);
};
const $for_content__rest = ($scope, rest) => _text($scope.e, rest.length);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<li><!>: first=<!> rest0=<!> rest1=<!> len=<!></li>", "D%c%c%c%c%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, [[
		7,
		8,
		9,
		10
	]]);
}));
