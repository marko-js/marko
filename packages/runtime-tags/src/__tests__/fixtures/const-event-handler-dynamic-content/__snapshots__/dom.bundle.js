// tags/heading.marko
const $inputtype_content__n = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._.e), 0, "c2", 4);
const $inputtype_content__setup = ($scope) => {
	$inputtype_content__n($scope);
	$inputtype_content__inc($scope);
};
const $inputtype_content__inc = /*@__PURE__*/ _closure_get(7, _script("c1", ($scope) => _on($scope.a, "click", $scope._.f ||= $inc($scope._))));
const $inputtype_content = _content("c0", "<button id=inc> </button>", " D ", $inputtype_content__setup);
_content_resume($inputtype_content);
const $n = /*@__PURE__*/ _let(4, /* @__PURE__ */ _closure($inputtype_content__n));
const $inc = ($scope) => function() {
	$n($scope, +$scope.e + 1);
};

// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
