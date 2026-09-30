// template.marko
const $tag_content__n = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.h), 0, "a1");
const $tag_content = _content("a0", "<option value=a>A<!></option>", "Db%", $tag_content__n);
_content_resume($tag_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, $tag_content);
const $tag = /*@__PURE__*/ _let(6, ($scope) => $dynamicTag($scope, $scope.g, () => ({ value: "b" })));
const $n = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($tag_content__n));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$tag($scope, $scope.g === "div" ? "select" : "div");
	});
	_on($scope.b, "click", function() {
		$n($scope, +$scope.h + 1);
	});
});
