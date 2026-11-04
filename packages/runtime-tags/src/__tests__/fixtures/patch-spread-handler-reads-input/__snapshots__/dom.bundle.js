// template.marko
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("a0", 2, 0, ($scope) => _text($scope.a, $scope._.h));
const $if = /*@__PURE__*/ _if(2, "<em> </em>", "D ", $if_content__input_label);
const $count = _let(8, ($scope) => {
	_text($scope.e, $scope.i);
	$if($scope, $scope.i ? 0 : 1);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		console.log("clicked " + $scope.h);
	});
	_on($scope.d, "click", function() {
		$count($scope, +$scope.i + 1);
	});
});
