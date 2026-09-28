// template.marko
const $fooChange2__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope.c("After");
}));
const $fooBar = ($scope) => function(v) {
	$scope.a.textContent = v;
};
_resumed.a0 = $fooBar;
