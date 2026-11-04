// tags/card.marko
const $c = _let(5, ($scope) => $c_x($scope, $scope.f?.x));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c_x = /*@__PURE__*/ _const(6, ($scope) => $dynamicTag($scope, $scope.g));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, {});
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 4, ($scope) => _text($scope.a, $scope._.d), 0, "a2", 0);
const $card_content = _content$1("a1", "<em>static <!></em>", "Db%", $card_content__input_label);
