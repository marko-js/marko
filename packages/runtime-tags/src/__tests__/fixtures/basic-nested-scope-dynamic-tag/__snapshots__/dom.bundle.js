// total: 4553 (min) 2133 (brotli)
// template.marko: 202 (min) 146 (brotli)
const $falseChild_content__count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.b + 1);
}));
const $falseChild_content__count = /* @__PURE__ */ _closure_get(1, ($scope) => {
	_text($scope.b, $scope._.b);
	$falseChild_content__count__script($scope);
});
const $falseChild_content__setup = $falseChild_content__count;
const $falseChild_content = _content_resume("a0", "<button> </button>", " D l", $falseChild_content__setup);
const $count__closure = /* @__PURE__ */ _closure($falseChild_content__count);
const $count = /* @__PURE__ */ _let(1, $count__closure);
