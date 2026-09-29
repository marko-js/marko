// tags/store.marko
const $last = /*@__PURE__*/ _fill_let("c0", 0, ($scope) => _return($scope, {
	last: $scope.a,
	set: $_return($scope)
}));
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resumed.c0 = $_return;

// tags/child.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.f.set($scope.f.last + 1);
}));
const $input_s_last = ($scope, input_s_last) => _text($scope.c, input_s_last);
const $input_s = /*@__PURE__*/ _const(5, ($scope) => $input_s_last($scope, $scope.f?.last));

// template.marko
const $s = _var_resume("a0", ($scope, s) => $input_s($scope.c, s));
