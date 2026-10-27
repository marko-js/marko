// tags/ret.marko
const $input_x$1 = /*@__PURE__*/ _const(2, ($scope) => _return($scope, String($scope.c) + "!"));

// tags/w.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p>r:<!></p>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&Db%l`)("");
const $r = _var_resume("c0", ($scope, r) => _text($scope.c, r));
const $input_x = ($scope, input_x) => $input_x$1($scope.a, input_x);
function $setup($scope) {
	_var($scope, 0, $r);
}

// template.marko
const $for_content__s = /*@__PURE__*/ _for_closure(2, ($scope) => $input_x($scope.a, $scope._.d + $scope.M));
const $for_content__setup = ($scope) => {
	$for_content__s._($scope);
	$setup($scope.a);
};
const $for = /*@__PURE__*/ _for_until_unkeyed(2, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $for_content__setup);
const $s = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$for($scope, [
		1 + $scope.d % 3,
		0,
		1
	]);
	$for_content__s($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$s($scope, +$scope.d + 1);
}));
