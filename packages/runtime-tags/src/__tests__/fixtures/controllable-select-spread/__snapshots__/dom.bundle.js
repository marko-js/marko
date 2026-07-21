// tags/my-select.marko
const $input__render = /*@__PURE__*/ _render(($scope) => _attrs_content($scope, "a", $scope.c));
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	$input__render($scope);
	$input__script($scope);
});

// template.marko
const $myselect_content = /*@__PURE__*/ _content("a1", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>", "d");
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.c));
const $value = /*@__PURE__*/ _let(2, ($scope) => {
	$value__render($scope);
	$input($scope.a, {
		value: $scope.c,
		valueChange: $valueChange($scope),
		content: $myselect_content($scope)
	});
});
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("a0", $valueChange);
