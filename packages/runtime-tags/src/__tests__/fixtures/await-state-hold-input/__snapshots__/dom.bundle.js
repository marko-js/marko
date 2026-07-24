// template.marko
_enable_hold();
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $text = /*@__PURE__*/ _let(3, ($scope) => {
	_attr_input_value($scope, "a", $scope.d, $valueChange($scope));
	_text($scope.b, $scope.d);
	$await_promise($scope, resolveAfter($scope.d));
});
const $setup__script = _script("a1", ($scope) => _attr_input_value_script($scope, "a"));
function $valueChange($scope) {
	return (_new_text) => {
		$text($scope, _new_text);
	};
}
_resume("a0", $valueChange);
