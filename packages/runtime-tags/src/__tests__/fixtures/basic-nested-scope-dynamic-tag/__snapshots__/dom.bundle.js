// template.marko
const $falseChild_content__count = /* @__PURE__ */ _closure_get(1, ($scope) => _text($scope.b, $scope._.b));
const $falseChild_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.b + 1);
}));
const $falseChild_content__setup = ($scope) => {
	$falseChild_content__count($scope);
	$falseChild_content__setup__script($scope);
};
const $falseChild_content = _content_resume("a0", "<button> </button>", " D l", $falseChild_content__setup);
const $count = /* @__PURE__ */ _let(1, /* @__PURE__ */ _closure($falseChild_content__count));
