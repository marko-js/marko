// template.marko
const $read = /*@__PURE__*/ _let(3, ($scope) => _text($scope.c, $scope.d));
const $global_brand__script = _global_script("a1", ($scope) => _on($scope.b, "click", function() {
	$read($scope, $scope.$.brand);
}));
const $global_brand = _global_join("brand", "a0", ($scope) => {
	$global_brand__script($scope);
	_text($scope.a, $scope.$.brand);
});
