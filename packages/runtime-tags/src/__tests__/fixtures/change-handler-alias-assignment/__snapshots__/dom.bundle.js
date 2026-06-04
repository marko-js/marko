// total: 1806 (min) 956 (brotli)
// template.marko: 127 (min) 90 (brotli)
const $fooChange2 = /* @__PURE__ */ _const(2, _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.c("After");
})));
function $fooBar($scope) {
	return function(v) {
		$scope.a.textContent = v;
	};
}
_resume("a0", $fooBar);
