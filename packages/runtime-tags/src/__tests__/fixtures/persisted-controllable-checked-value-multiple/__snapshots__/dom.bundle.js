// template.marko
const $last = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a2", ($scope) => {
	_attr_input_checkedValue_script($scope, "a");
	_attr_input_checkedValue_script($scope, "b");
});
const $checkedValueChange2 = ($scope) => function(next) {
	$last($scope, next.join(","));
};
const $checkedValueChange = ($scope) => function(next) {
	$last($scope, next.join(","));
};
_resume("a1", $checkedValueChange2);
_resume("a0", $checkedValueChange);
