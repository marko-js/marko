// tags/my-select.marko
const $input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $input = /* @__PURE__ */ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$input__script($scope);
});

// template.marko
const $myselect_content = _content_resume("a1", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>", "d");
const $value = /* @__PURE__ */ _let(2, ($scope) => {
	$input($scope.a, {
		value: $scope.c,
		valueChange: $valueChange($scope),
		content: $myselect_content($scope)
	});
	_text($scope.b, $scope.c);
});
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("a0", $valueChange);
