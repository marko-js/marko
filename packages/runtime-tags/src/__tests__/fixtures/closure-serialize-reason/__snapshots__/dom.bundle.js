// total: 5872 (min) 2712 (brotli)
// template.marko: 230 (min) 163 (brotli)
const $if_content__getMessage = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.h()));
const $if = /* @__PURE__ */ _if(0, "<span> </span>", "D l", $if_content__getMessage);
const $x__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.g + 1);
}));
const $x = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.c, $scope.g);
	$if($scope, $scope.g ? 0 : 1);
	$x__script($scope);
});
function $getMessage($scope) {
	return () => $scope.f;
}
_resume("a0", $getMessage);
