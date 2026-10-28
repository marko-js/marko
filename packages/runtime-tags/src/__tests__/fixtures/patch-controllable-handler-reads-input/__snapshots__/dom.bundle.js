// template.marko
const $if_content__input_label = /*@__PURE__*/ _fill_join("a2", 7, /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.h)));
const $if = /*@__PURE__*/ _if(2, "<em> </em>", "D ", $if_content__input_label);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.e, $scope.i);
	$if($scope, $scope.i ? 0 : 1);
});
const $setup__script = _script("a1", ($scope) => {
	_attr_input_value_script($scope, "b");
	_on($scope.d, "click", function() {
		$count($scope, +$scope.i + 1);
	});
});
const $valueChange = ($scope) => function(v) {
	console.log(v + ":" + $scope.h);
};
_bind_resume("a0 h", $valueChange);
