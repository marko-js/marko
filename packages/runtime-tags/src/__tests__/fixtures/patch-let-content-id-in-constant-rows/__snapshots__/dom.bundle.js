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
const $for_content__setup = ($scope) => $for_content__rid($scope, _id($scope));
const $for_content__$params = ($scope, $params2) => _text($scope.c, $params2[0]);
const $card_content__for = /*@__PURE__*/ _for_of_unkeyed(0, "<input type=radio name=r><label> </label>", " b D ", $for_content__setup, $for_content__$params);
const $card_content__setup = ($scope) => $card_content__for($scope, [[1, 2]]);
const $card_content = _content$1("a0", "<!><!><!>", "b%", $card_content__setup);
