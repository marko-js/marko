// tags/child/index.marko
const $template = "<em> </em>";
const $input_foo = ($scope, input_foo) => _text($scope.a, input_foo);

// template.marko
const $tag_content__input_foo = /*@__PURE__*/ _closure_get(8, ($scope) => $input_foo($scope.a, $scope._.g), 0, "a3", 6);
const $tag_content = _content_resume("a2", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $tag_content__input_foo);
const $inputtag_content__input_foo = /*@__PURE__*/ _closure_get(8, ($scope) => $input_foo($scope.a, $scope._.g), 0, "a1", 6);
const $inputtag_content = _content_resume("a0", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $inputtag_content__input_foo);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(1, $tag_content);
const $tag = /*@__PURE__*/ _let(7, ($scope) => $dynamicTag2($scope, $scope.h));
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$tag($scope, $scope.h === "div" ? "section" : "div");
}));
