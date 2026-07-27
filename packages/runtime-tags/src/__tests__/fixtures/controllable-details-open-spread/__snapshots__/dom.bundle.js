// tags/my-details.marko
_enable_controllable_open();
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs($scope, "a", $scope.c, _controllable_open);
	$input__script($scope);
});

// template.marko
const $open = /*@__PURE__*/ _let(2, ($scope) => {
	$input($scope.a, {
		open: $scope.c,
		openChange: $openChange($scope)
	});
	_text($scope.b, String($scope.c));
});
function $openChange($scope) {
	return (_new_open) => {
		$open($scope, _new_open);
	};
}
_resume("a0", $openChange);
