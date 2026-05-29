// total: 2017 (min) 1012 (brotli)
// template.marko: 181 (min) 117 (brotli)
const $setText2 = /* @__PURE__ */ _const(1, _script("a1", ($scope) => $scope.b()));
function $setText($scope) {
	return function(arg) {
		if (arg) throw new Error(`Expected no argument to be passed, but received "${typeof arg}".`);
		$scope.a.textContent = typeof arg;
	};
}
_resume("a0", $setText);
