// total: 4511 (min) 2022 (brotli)
// template.marko: 566 (min) 190 (brotli)
const $checked = /* @__PURE__ */ _let(5, ($scope) => {
	_attr_input_checkedValue($scope, "a", $scope.f, $checkedValueChange($scope), 0);
	_attr_input_checkedValue($scope, "b", $scope.f, $checkedValueChange2($scope), "1");
	_attr_input_checkedValue($scope, "c", $scope.f, $checkedValueChange3($scope), 2);
	_text($scope.d, $scope.f);
});
const $setup__script = _script("a3", ($scope) => {
	_attr_input_checkedValue_script($scope, "a");
	_attr_input_checkedValue_script($scope, "b");
	_attr_input_checkedValue_script($scope, "c");
	_on($scope.e, "click", function() {
		$checked($scope, [1]);
	});
});
function $checkedValueChange3($scope) {
	return function(v) {
		$checked($scope, v.map((it) => Number(it)));
	};
}
function $checkedValueChange2($scope) {
	return function(v) {
		$checked($scope, v.map((it) => Number(it)));
	};
}
function $checkedValueChange($scope) {
	return function(v) {
		$checked($scope, v.map((it) => Number(it)));
	};
}
_resume("a2", $checkedValueChange3);
_resume("a1", $checkedValueChange2);
_resume("a0", $checkedValueChange);
