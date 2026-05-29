// total: 2681 (min) 1342 (brotli)
// template.marko: 125 (min) 87 (brotli)
const $clickCount = /* @__PURE__ */ _let(1, _script("a0", ($scope) => {
	document.getElementById("button").textContent = $scope.b;
	_on($scope.a, "click", function() {
		$clickCount($scope, $scope.b + 1);
	});
}));
