// total: 6087 (min) 2790 (brotli)
// template.marko: 259 (min) 181 (brotli)
const $if_content2__input_name = /* @__PURE__ */ _closure_get(4, ($scope) => _text($scope.a, $scope._._.e || "Fallback"), ($scope) => $scope._._);
const $if_content__if = /* @__PURE__ */ _if(0, "<div> </div>", "D l", $if_content2__input_name);
const $if_content__setup = ($scope) => $if_content__if($scope, 0);
const $Child_content__if = /* @__PURE__ */ _if(0, "<!><!><!>", "b%c", $if_content__setup);
const $Child_content__input_count = ($scope, input_count) => $Child_content__if($scope, input_count ? 0 : 1);
const $count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$Child_content__input_count($scope.c, $scope.d);
	$count__script($scope);
});
