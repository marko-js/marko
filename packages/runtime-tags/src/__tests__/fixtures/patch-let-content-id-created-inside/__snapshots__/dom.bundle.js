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
const $for_content__rid = ($scope, rid) => {
	_attr($scope.a, "id", rid);
	_attr($scope.b, "for", rid);
};
const $for_content__setup = ($scope) => {
	_text($scope.c, $scope.M);
	$for_content__rid($scope, _id($scope));
};
const $if_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 7, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a5", 0);
const $if_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__uid($scope, _id($scope));
};
const $card_content__if = /*@__PURE__*/ _if(0, "<input><label> </label>", " b D ", $if_content__setup);
const $card_content__input_show = /*@__PURE__*/ _closure_get_patch("a1", 6, ($scope) => $card_content__if($scope, $scope._.d ? 0 : 1), 0, "a4", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_show($scope);
	$card_content__input_items($scope);
};
const $card_content__for = /*@__PURE__*/ _for_of(1, "<input><label> </label>", " b D ", $for_content__setup);
const $card_content__input_items = /*@__PURE__*/ _closure_get_patch("a2", 8, ($scope) => $card_content__for($scope, [$scope._.f, "id"]), 0, "a6", 0);
const $card_content = _content$1("a3", "<!><!><!><!>", "b%b%", $card_content__setup);
