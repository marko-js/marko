// template.marko
const $MyTag_content__y = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	_text($scope.d, $scope.h);
});
const $MyTag_content__setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$MyTag_content__y($scope, $scope.h + 1);
}));
