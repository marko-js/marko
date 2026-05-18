// total: 8951 (min) 3882 (brotli)
// template.marko: 546 (min) 285 (brotli)
const $for_content__opt = ($scope, opt) => {
	_attr($scope.a, "value", opt);
	_text($scope.b, opt);
};
const $for_content__$params = ($scope, $params2) => $for_content__opt($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of(0, "<option> </option>", " D l", 0, $for_content__$params);
const $options__script = _script("a1", ($scope) => {
	_on($scope.c, "click", function() {
		$options($scope, $scope.e.slice(1));
	});
	_on($scope.d, "click", function() {
		$options($scope, [$scope.e?.length ? $scope.e?.[0] - 1 : 3, ...$scope.e]);
	});
});
const $options = /* @__PURE__ */ _let(4, ($scope) => {
	$options_($scope, $scope.e?.[0]);
	$for($scope, [$scope.e, (v) => v]);
	$options__script($scope);
});
const $value = /* @__PURE__ */ _let(6, ($scope) => {
	_attr_select_value($scope, "a", $scope.g, $valueChange($scope));
	_text($scope.b, $scope.g);
});
const $options_ = /* @__PURE__ */ _const(5, ($scope) => $value($scope, $scope.f));
const $setup__script = _script("a2", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.a, "change", console.log);
	_on($scope.a, "input", console.log);
});
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("a0", $valueChange);
