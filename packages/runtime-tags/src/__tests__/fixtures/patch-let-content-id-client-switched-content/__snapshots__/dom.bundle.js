// tags/card.marko
const $Other_content = _content$1("b0", "<b>other</b>");
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$c($scope, $scope.g);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(7, ($scope) => {
	$dynamicTag($scope, $scope.h);
	$dynamicTag2($scope, $scope.h);
});

// template.marko
const $if_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a4", 0);
const $if_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__uid($scope, _id($scope));
};
const $card_content__if = /*@__PURE__*/ _if(0, "<input><label> </label>", " b D ", $if_content__setup);
const $card_content__input_show = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => $card_content__if($scope, $scope._.d ? 0 : 1), 0, "a3", 0);
const $card_content = _content$1("a2", "<!><!><!>", "b%", $card_content__input_show);
