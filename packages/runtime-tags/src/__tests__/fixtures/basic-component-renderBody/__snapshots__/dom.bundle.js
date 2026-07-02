// tags/my-button.marko
const $onClick__script = _script("b0", ($scope) => _on($scope.a, "click", $scope.e));

// template.marko
const $mybutton_content__clickCount = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.a, $scope._.b));
const $clickCount = /* @__PURE__ */ _let(1, /* @__PURE__ */ _closure($mybutton_content__clickCount));
function $onClick($scope) {
	return function() {
		$clickCount($scope, $scope.b + 1);
	};
}
_resume("a0", $onClick);
