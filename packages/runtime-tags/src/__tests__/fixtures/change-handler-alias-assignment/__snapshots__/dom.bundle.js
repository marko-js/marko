// total: 1839 (min) 971 (brotli)
// template.marko: 127 (min) 90 (brotli)
const $fooChange2__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.c("After");
}));
function $fooBar($scope) {
	return function(v) {
		$scope.a.textContent = v;
	};
}
_resume("a0", $fooBar);
