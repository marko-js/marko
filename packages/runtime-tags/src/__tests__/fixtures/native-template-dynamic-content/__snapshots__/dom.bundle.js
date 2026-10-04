// tags/child.marko
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// template.marko
const $if = /*@__PURE__*/ _if(0, "<span>shown</span>");
const $show = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.b, $scope.f ? "on" : "off");
	_text($scope.c, $scope.f ? "inner on" : "inner off");
	$input_label($scope.d, $scope.f ? "child on" : "child off");
	$if($scope, $scope.f ? 0 : 1);
});
const $setup__script = _script("a0", ($scope) => _on($scope.e, "click", function() {
	$show($scope, !$scope.f);
}));
