// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/owner.marko
const $toggle_content__input_label = /*@__PURE__*/ _closure_get_patch("c2", 6, ($scope) => _text($scope.a, $scope._.e), 0, "c4", 1);
const $toggle_content = _content$1("c3", "<i>guarded <!></i>", "Db%", $toggle_content__input_label);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("c0", 6, ($scope) => _text($scope.a, $scope._.e), 0, "c4", 0);
const $card_content = _content$1("c1", "<b>held <!></b>", "Db%", $card_content__input_label);
