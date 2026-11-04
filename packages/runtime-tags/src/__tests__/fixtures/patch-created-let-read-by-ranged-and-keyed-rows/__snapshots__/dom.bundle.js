// template.marko
const $for_content2__sel = /*@__PURE__*/ _for_selector_patch("a7", 2, 3, ($scope) => _text($scope.a, $scope.M === $scope._.d ? "*" : ""));
const $for_content__sel = /*@__PURE__*/ _for_selector_patch("a6", 1, 3, ($scope) => _text($scope.b, $scope.M === $scope._.d ? "*" : ""));
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$if_content__sel($scope._, $scope.M);
}));
const $if_content__sel = /*@__PURE__*/ _fill_let("a4", 3, ($scope) => {
	_text($scope.a, $scope.d);
	$for_content__sel($scope);
	$for_content2__sel($scope);
});
