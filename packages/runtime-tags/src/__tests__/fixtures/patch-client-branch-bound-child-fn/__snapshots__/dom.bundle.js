// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/fnchild.marko
const $inputtag_content__input_label = /*@__PURE__*/ _closure_get_patch("c2", 6, ($scope) => _text($scope.a, $scope._.e), 0, "c3", 0);
const $inputtag_content = _content$1("c1", " ", " ", $inputtag_content__input_label);
const $onClick = ($scope) => function() {
	console.log("x", $scope.e);
};
_bind_resume("c0 e", $onClick);
