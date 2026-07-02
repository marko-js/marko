// template.marko
const $myObj = ($scope, myObj) => _text($scope.a, JSON.stringify(myObj));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$myObj($scope, {
		foo: 1,
		bar: $scope.d + 1
	});
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
