// tags/list.marko
const $inputtag_content__row_label = /*@__PURE__*/ _closure_get_patch("c1", 6, ($scope) => _text($scope.a, $scope._.f), 0, "c3", 0);
const $inputtag_content = _content$1("c0", " ", " ", $inputtag_content__row_label);
_content_resume($inputtag_content);

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

// template.marko
const $onSelect = ($locals) => function() {
	const $scope = $locals._;
	console.log($locals.k, $scope._._.g);
};
_bind_resume("a0 >>g", $onSelect);
