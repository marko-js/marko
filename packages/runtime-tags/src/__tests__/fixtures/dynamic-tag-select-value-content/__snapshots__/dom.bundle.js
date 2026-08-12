// template.marko
const $tag_content__n = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.h));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, _content_resume("a0", "<option value=a>A<!></option>", "Db%", $tag_content__n));
const $tag = /*@__PURE__*/ _let(6, ($scope) => $dynamicTag($scope, $scope.g, () => ({ value: "b" })));
const $n = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($tag_content__n));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$tag($scope, $scope.g === "div" ? "select" : "div");
	});
	_on($scope.b, "click", function() {
		$n($scope, +$scope.h + 1);
	});
});
