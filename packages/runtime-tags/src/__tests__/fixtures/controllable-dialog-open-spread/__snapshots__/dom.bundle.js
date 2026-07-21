// tags/my-dialog.marko
const $input__render = /*@__PURE__*/ _render(($scope) => _attrs_content($scope, "a", $scope.c));
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	$input__render($scope);
	$input__script($scope);
});

// template.marko
const $open__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, String($scope.c)));
const $open = /*@__PURE__*/ _let(2, ($scope) => {
	$open__render($scope);
	$input($scope.a, {
		open: $scope.c,
		openChange: $openChange($scope)
	});
});
function $openChange($scope) {
	return (_new_open) => {
		$open($scope, _new_open);
	};
}
_resume("a0", $openChange);
