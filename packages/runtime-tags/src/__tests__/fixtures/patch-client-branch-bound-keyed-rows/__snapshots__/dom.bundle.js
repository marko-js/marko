// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $inputtag_content__r_label = /*@__PURE__*/ _closure_get_patch("a6", 8, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "a12", 2);
const $inputtag_content = _content$1("a5", " ", " ", $inputtag_content__r_label);
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a3", 6, ($scope) => _text($scope.c, $scope._._._.e), ($scope) => $scope._._._, "a14", 0);
const $Inner_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._._.d, $scope._._._.e);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__r_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__r_label = /*@__PURE__*/ _closure_get_patch("a4", 8, ($scope) => _text($scope.b, $scope._._.d), ($scope) => $scope._._, "a12", 1);
const $Inner_content = _content$1("a1", "<b><!><!></b>", " D%b%", $Inner_content__setup);
const $onClick = ($scope) => function() {
	console.log("direct", $scope._.d);
};
_bind_resume("a0 >d", $onClick);
