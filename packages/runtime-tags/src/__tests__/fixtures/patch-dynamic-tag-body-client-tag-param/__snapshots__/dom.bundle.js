// tags/child.marko
const $inputtag_content__input_note = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_join_closure("b3", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "b2"), 0));
const $inputtag_content = _content$1("b0", " ", " ", $inputtag_content__input_note);
_content_resume($inputtag_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputtag_content);
const $input_tag = $dynamicTag;

// template.marko
const $tag = /*@__PURE__*/ _let(5, ($scope) => $input_tag($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$tag($scope, $scope.f === "b" ? "i" : "b");
}));
