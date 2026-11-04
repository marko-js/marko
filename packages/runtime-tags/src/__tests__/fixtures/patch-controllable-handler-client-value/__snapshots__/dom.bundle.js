// template.marko
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("a2", 3, 0, ($scope) => _text($scope.a, $scope._.i));
const $if = /*@__PURE__*/ _if(3, "<em> </em>", "D ", $if_content__input_label);
const $input_label__OR__count = /*@__PURE__*/ _or_patch("a4", 10, ($scope) => _attr_input_value($scope, "c", String($scope.j), $valueChange2($scope)));
const $count = _let(9, ($scope) => {
	_text($scope.f, $scope.j);
	$if($scope, $scope.j ? 0 : 1);
	$input_label__OR__count($scope);
});
const $setup__script = _script("a3", ($scope) => {
	_attr_input_value_script($scope, "b");
	_attr_input_value_script($scope, "c");
	_on($scope.e, "click", function() {
		$count($scope, +$scope.j + 1);
	});
});
const $valueChange2 = ($scope) => function(v) {
	console.log(v + ":" + $scope.i);
};
const $valueChange = ($scope) => function(v) {
	console.log(v + ":" + $scope.i);
};
_bind_resume("a1 i", $valueChange2);
_bind_resume("a0 i", $valueChange);
