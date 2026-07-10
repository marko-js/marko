// template.marko
const $list = /*@__PURE__*/ _let(4, ($scope) => {
	$list_($scope, $scope.e?.[0]);
	$list_2($scope, $scope.e?.[1]);
});
const $pattern4 = ($scope, $pattern) => (([, ...rest]) => $rest($scope, rest))($pattern);
const $list_ = /*@__PURE__*/ _const(5, ($scope) => $pattern4($scope, $scope.f));
const $pattern6 = ($scope, $pattern2) => $temp2($scope, $pattern2[0]);
const $list_2 = /*@__PURE__*/ _const(6, ($scope) => $pattern6($scope, $scope.g));
const $obj = /*@__PURE__*/ _let(7, ($scope) => $kept($scope, $scope.h.kept));
const $setup__script = _script("a0", ($scope) => _on($scope.d, "click", function() {
	$obj($scope, {});
	$list($scope, [[{ n: 1 }, { n: 2 }], [{ c: "C" }]]);
}));
const $kept = /*@__PURE__*/ _const(11, ($scope) => _text($scope.b, String($scope.l)));
const $rest = ($scope, rest) => $rest_length($scope, rest.length);
const $rest_length = ($scope, rest_length) => _text($scope.a, rest_length);
const $pattern5 = ($scope, $pattern3 = {}) => $c2($scope, $pattern3.c);
const $c3 = ($scope, c = "c") => _text($scope.c, c);
const $c2 = $c3;
const $temp2 = $pattern5;
