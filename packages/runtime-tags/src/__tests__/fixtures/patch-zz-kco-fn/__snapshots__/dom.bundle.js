// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $inputtag_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 7, ($scope) => _text($scope.a, $scope._._._.f), ($scope) => $scope._._._, "a9", 1);
const $inputtag_content = _content$1("a1", " ", " ", $inputtag_content__input_label);
const $onClick = ($scope) => function() {
	console.log("clicked", $scope._._.f);
};
_bind_resume("a0 >>f", $onClick);
