// total: 2687 (min) 1377 (brotli)
// template.marko: 133 (min) 113 (brotli)
const $MyTag_content__c = ($scope, c) => _text($scope.c, c);
const $x__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	$MyTag_content__c($scope.a, $scope.d);
	_text($scope.c, $scope.d);
	$x__script($scope);
});
