// total: 2451 (min) 1280 (brotli)
// template.marko: 129 (min) 91 (brotli)
const $clickCount__script = _script("a0", ($scope) => {
	document.getElementById("button").textContent = $scope.b;
	_on($scope.a, "click", function() {
		$clickCount($scope, $scope.b + 1);
	});
});
const $clickCount = /* @__PURE__ */ _let(1, $clickCount__script);
