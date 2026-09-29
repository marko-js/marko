// template.marko
const $for_content__checkedValue__OR__value = /*@__PURE__*/ _or(3, ($scope) => _attr_input_checkedValue($scope, "a", $scope._.c, $checkedValueChange($scope), $scope.c));
const $for_content__checkedValue = /*@__PURE__*/ _for_closure(0, $for_content__checkedValue__OR__value);
const $for_content__setup__script = _script("a1", ($scope) => _attr_input_checkedValue_script($scope, "a"));
const $checkedValue = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$for_content__checkedValue($scope);
});
const $checkedValueChange = ($scope) => (_new_checkedValue) => {
	$checkedValue($scope._, _new_checkedValue);
};
_resumed.a0 = $checkedValueChange;
