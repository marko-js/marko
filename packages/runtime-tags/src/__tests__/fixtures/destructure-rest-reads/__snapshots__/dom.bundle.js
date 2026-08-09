// template.marko
const $list = /*@__PURE__*/ _let(9, ($scope) => {
	(([, ...rest]) => $rest($scope, rest))($scope.j);
	(([, ...copy]) => $copy($scope, copy))($scope.j);
	$first($scope, $scope.j[0]);
	$list_($scope, $scope.j[1]);
	$list_2($scope, $scope.j[2]);
});
const $rest = /*@__PURE__*/ _const(11, ($scope) => $rest_length($scope, $scope.l.length));
const $rest_length = /*@__PURE__*/ _const(14, ($scope) => _text($scope.d, $scope.o));
const $copy = /*@__PURE__*/ _const(15, ($scope) => $copy_length($scope, $scope.p.length));
const $copy_length = /*@__PURE__*/ _const(16, ($scope) => _text($scope.h, $scope.q));
const $first = /*@__PURE__*/ _const(10, ($scope) => _text($scope.a, $scope.k));
const $list_ = /*@__PURE__*/ _const(12, ($scope) => {
	_text($scope.b, $scope.m);
	_text($scope.g, $scope.m);
	$second($scope, $scope.m);
});
const $second = ($scope) => {
	_text($scope.e, $scope.m);
};
const $list_2 = /*@__PURE__*/ _const(13, ($scope) => {
	_text($scope.c, $scope.n);
	$third($scope, $scope.n);
});
const $third = ($scope) => {
	_text($scope.f, $scope.n);
};
const $setup__script = _script("a0", ($scope) => _on($scope.i, "click", function() {
	$list($scope, [4, 5]);
}));
