// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $c = _let(4, ($scope) => $dynamicTag($scope, $scope.e));

// template.marko
const $card_content__count = _let(2, /* @__PURE__ */ _fill_global("a0", ($scope) => _text($scope.b, $scope.$.label + $scope.c), "label"));
const $card_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$card_content__count($scope, +$scope.c + 1);
}));
const $card_content__setup = ($scope) => {
	$card_content__count($scope, 0);
	$card_content__setup__script($scope);
};
const $card_content = _content$1("a2", "<button>+</button><b> </b>", " bD ", $card_content__setup);
