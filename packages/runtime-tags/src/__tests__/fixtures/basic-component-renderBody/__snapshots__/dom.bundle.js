// total: 3061 (min) 1546 (brotli)
// tags/my-button.marko: 38 (min) 42 (brotli)
const $onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.e));
const $onClick$1 = /* @__PURE__ */ _const(4, $onClick__script);

// template.marko: 159 (min) 113 (brotli)
const $mybutton_content__clickCount = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $clickCount__closure = /* @__PURE__ */ _closure($mybutton_content__clickCount);
const $clickCount = /* @__PURE__ */ _let(1, ($scope) => {
	$onClick$1($scope.a, $onClick($scope));
	$clickCount__closure($scope);
});
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);
