// tags/make.marko
const $input_v$1 = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $_return($scope)));
const $_return = ($scope) => () => $scope.c;
_resumed.b0 = $_return;

// tags/reader.marko
const $input__script = _script("d0", ($scope) => $scope.a.textContent = $scope.c.fn());
const $input = /*@__PURE__*/ _const(2, $input__script);

// tags/pair.marko
const $fn = _var_resume("c0", ($scope, fn) => $input($scope.c, { fn }));
const $input_v = ($scope, input_v) => $input_v$1($scope.a, input_v);

// template.marko
const $v = /*@__PURE__*/ _let(2, ($scope) => $input_v($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$v($scope, "b");
}));
