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
const $Inner_content__n = /*@__PURE__*/ _closure_get_patch("a9", 9, ($scope) => _text($scope.b, $scope._.e), 0, "a12", 2);
const $Inner_content__setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	console.log("tree", $scope._.e, $scope._.f);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__n($scope);
	$Inner_content__label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__label = /*@__PURE__*/ _closure_get_patch("a10", 10, ($scope) => _text($scope.c, $scope._.f), 0, "a13", 1);
const $Inner_content = _content$1("a4", "<b><!><!></b>", " D%b%", $Inner_content__setup);
