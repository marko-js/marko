// tags/card.marko
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$c($scope, void 0);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(3);
const $c = _let(8, ($scope) => $dynamicTag($scope, $scope.i));

// template.marko
const $card_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $card_content__setup = ($scope) => {
	_text($scope.c, $scope._.M);
	$card_content__uid($scope, _id($scope));
};
const $card_content = _content$1("a0", "<input><label> </label>", " b D ", $card_content__setup);
