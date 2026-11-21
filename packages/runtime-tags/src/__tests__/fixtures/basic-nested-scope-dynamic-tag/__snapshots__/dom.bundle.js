// template.marko
const $inputtagChild_content__count = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.b, $scope._.e), 0, "a2");
const $inputtagChild_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.e + 1);
}));
const $inputtagChild_content__setup = ($scope) => {
	$inputtagChild_content__count($scope);
	$inputtagChild_content__setup__script($scope);
};
const $inputtagChild_content = _content("a0", "<button> </button>", " D ", $inputtagChild_content__setup);
const $count = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($inputtagChild_content__count));
