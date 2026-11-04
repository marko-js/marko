// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 8, ($scope) => _text($scope.c, $scope._._._._.f), ($scope) => $scope._._._._, "a13", 0);
const $Inner_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.c);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__v($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__v = /*@__PURE__*/ _closure_get_patch("a3", 10, ($scope) => _text($scope.b, $scope._.c), 0, "a4", 0);
const $Inner_content = _content$1("a0", "<b><!><!></b>", " D%b%", $Inner_content__setup);
_content_resume($Inner_content);
