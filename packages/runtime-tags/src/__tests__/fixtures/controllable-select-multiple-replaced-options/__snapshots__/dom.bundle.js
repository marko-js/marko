// template.marko
const $for_content__opt = ($scope, opt) => {
	_attr($scope.a, "value", opt);
	_text($scope.b, opt);
};
const $for_content__$params = ($scope, $params2) => $for_content__opt($scope, $params2[0]);
const $value = /*@__PURE__*/ _let(4, ($scope) => {
	_attr_select_value($scope, "a", $scope.e, $valueChange($scope));
	_text($scope.b, $scope.e.join(","));
});
const $for = /*@__PURE__*/ _for_of(0, "<option> </option>", " D ", 0, $for_content__$params);
const $options = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f, (v) => v]));
const $setup__script = _script("a1", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$options($scope, [
			"a",
			"b",
			"c"
		]);
	});
	_on($scope.d, "click", function() {
		$options($scope, ["a", "b"]);
	});
});
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
