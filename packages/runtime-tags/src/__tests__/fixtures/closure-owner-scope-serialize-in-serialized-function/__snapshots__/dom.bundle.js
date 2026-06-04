// total: 1501 (min) 825 (brotli)
// template.marko: 134 (min) 94 (brotli)
const $if_content__run = /* @__PURE__ */ _const(1, _script("a2", ($scope) => $scope.b()));
function $run($scope) {
	return function() {
		$scope.a.innerHTML = $scope._.b();
	};
}
function $text() {
	return "HI";
}
_resume("a1", $run);
_resume("a0", $text);
