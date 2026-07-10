// template.marko
const $if = /*@__PURE__*/ _if(0, "<!--M_*note pending--><span>visible</span>", "c");
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$if($scope, $scope.d < 10 ? 0 : 1);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.d + 1);
}));
