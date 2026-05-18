// total: 9063 (min) 3492 (brotli)
// tags/FancyButton.marko: 38 (min) 42 (brotli)
const $attrs__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $attrs = /* @__PURE__ */ _const(5, ($scope) => {
	_attrs($scope, "a", $scope.f);
	$attrs__script($scope);
});

// template.marko: 165 (min) 118 (brotli)
const $FancyButton_content__clickCount = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $clickCount__closure = /* @__PURE__ */ _closure($FancyButton_content__clickCount);
const $clickCount = /* @__PURE__ */ _let(1, ($scope) => {
	$attrs($scope.a, { onClick: $onClick($scope) });
	$clickCount__closure($scope);
});
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);
