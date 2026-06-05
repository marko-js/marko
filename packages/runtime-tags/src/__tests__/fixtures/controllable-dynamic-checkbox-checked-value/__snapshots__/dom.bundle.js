// template.marko
const $if_content__checkedValue__OR__$checkedValueChange = /* @__PURE__ */ _or(1, ($scope) => _attr_input_checkedValue($scope, "a", $scope._.g, $scope._.h, "b"));
const $if_content__checkedValue = /* @__PURE__ */ _if_closure(1, 0, $if_content__checkedValue__OR__$checkedValueChange);
const $if_content__setup__script = _script("a1", ($scope) => _attr_input_checkedValue_script($scope, "a"));
const $if_content__setup = ($scope) => {
	$if_content__checkedValue._($scope);
	$if_content__$checkedValueChange._($scope);
	$if_content__setup__script($scope);
};
const $if_content__$checkedValueChange = /* @__PURE__ */ _if_closure(1, 0, $if_content__checkedValue__OR__$checkedValueChange);
const $if = /* @__PURE__ */ _if(1, "<input type=radio>", " b", $if_content__setup);
const $show__script = _script("a2", ($scope) => _on($scope.e, "click", function() {
	$show($scope, !$scope.f);
}));
const $show = /* @__PURE__ */ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$show__script($scope);
});
const $checkedValue__OR__$checkedValueChange = /* @__PURE__ */ _or(8, ($scope) => {
	_attr_input_checkedValue($scope, "a", $scope.g, $scope.h, "a");
	_attr_input_checkedValue($scope, "c", $scope.g, $scope.h, "c");
});
const $checkedValue = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.d, $scope.g);
	$checkedValue__OR__$checkedValueChange($scope);
	$if_content__checkedValue($scope);
});
const $setup__script = _script("a3", ($scope) => {
	_attr_input_checkedValue_script($scope, "a");
	_attr_input_checkedValue_script($scope, "c");
});
function $checkedValueChange2($scope) {
	return (_new_checkedValue) => {
		$checkedValue($scope, _new_checkedValue);
	};
}
_resume("a0", $checkedValueChange2);
