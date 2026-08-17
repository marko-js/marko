// template.marko
const $await_content__clicks = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.b, $scope._._.b), ($scope) => $scope._._, "a1");
const $await_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope._._, +$scope._._.b + 1);
}));
const $placeholder_content__clicks = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.b, $scope._.b));
const $placeholder_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope._, +$scope._.b + 1);
}));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__clicks($scope);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content_resume("a3", "<button>loading <!></button>", " Db%", $placeholder_content__setup);
const $clicks = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($placeholder_content__clicks, $await_content__clicks));
