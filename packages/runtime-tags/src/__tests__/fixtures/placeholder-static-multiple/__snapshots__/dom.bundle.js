// total: 5482 (min) 2558 (brotli)
// template.marko: 132 (min) 119 (brotli)
const $if_content__mounted = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.b && "C"));
const $if = /* @__PURE__ */ _if(0, "AB<!>D", "b%c", $if_content__mounted);
const $mounted = /* @__PURE__ */ _let(1, ($scope) => {
	$if($scope, $scope.b ? 0 : 1);
	$if_content__mounted($scope);
});
const $setup__script = _script("a0", ($scope) => $mounted($scope, true));
