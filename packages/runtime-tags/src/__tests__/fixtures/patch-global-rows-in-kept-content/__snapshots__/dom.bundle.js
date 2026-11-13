// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $for_content__setup__$global_brand = /*@__PURE__*/ _fill_global("a0", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $for_content__setup = ($scope) => {
	_text($scope.b, $scope.M);
	$for_content__setup__$global_brand($scope);
};
const $card_content__for = /*@__PURE__*/ _for_until_unkeyed(1, "<p><!> <!></p>", "D%c%", $for_content__setup);
const $card_content__input_n = /*@__PURE__*/ _closure_get_patch("a2", 4, ($scope) => $card_content__for($scope, [$scope._.d]), 0, "a4", 0);
const $card_content__setup__$global_brand = /*@__PURE__*/ _fill_global("a1", ($scope) => _text($scope.a, $scope.$.brand), "brand");
const $card_content__setup = ($scope) => {
	$card_content__input_n($scope);
	$card_content__setup__$global_brand($scope);
};
const $card_content = _content$1("a3", "<h1> </h1><!><!>", "D l%", $card_content__setup);
