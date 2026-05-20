// total: 2551 (min) 1339 (brotli)
// template.marko: 161 (min) 128 (brotli)
const $myObj = ($scope, myObj) => _text($scope.a, JSON.stringify(myObj));
const $x__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$myObj($scope, {
		foo: 1,
		bar: $scope.d + 1
	});
	$x__script($scope);
});
