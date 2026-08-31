// template.marko
const $for_content__a = /*@__PURE__*/ _for_closure(2, ($scope) => _text($scope.a, $scope._.g));
const $if_content__a = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.g));
const $a = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.a, $scope.g);
	_attr_input_value($scope, "d", $scope.g, $valueChange($scope));
	_text($scope.e, $scope.g);
	$if_content__a($scope);
	$for_content__a($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_attr_input_value_script($scope, "d");
	_on($scope.f, "click", function() {
		$a($scope, "filled");
	});
});
const $valueChange = ($scope) => (_new_a) => {
	$a($scope, _new_a);
};
_resume("a0", $valueChange);
