// total: 4245 (min) 1926 (brotli)
// template.marko: 236 (min) 152 (brotli)
const $selected = /* @__PURE__ */ _let(3, ($scope) => {
	_attr_select_value($scope, "a", $scope.d, $valueChange($scope));
	_text($scope.b, $scope.d);
});
const $setup__script = _script("a1", ($scope) => {
	_attr_select_value_script($scope, "a");
	_on($scope.c, "click", function() {
		$selected($scope, [1]);
	});
});
function $valueChange($scope) {
	return function(v) {
		$selected($scope, v.map((it) => Number(it)));
	};
}
_resume("a0", $valueChange);
