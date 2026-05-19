// total: 5506 (min) 2574 (brotli)
// template.marko: 136 (min) 125 (brotli)
const $if_content__mounted = /* @__PURE__ */ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.b && "C"));
const $if_content__setup = $if_content__mounted;
const $if = /* @__PURE__ */ _if(0, "AB<!>D", "b%c", $if_content__setup);
const $mounted = /* @__PURE__ */ _let(1, ($scope) => {
	$if($scope, $scope.b ? 0 : 1);
	$if_content__mounted($scope);
});
const $setup__script = _script("a0", ($scope) => $mounted($scope, true));
