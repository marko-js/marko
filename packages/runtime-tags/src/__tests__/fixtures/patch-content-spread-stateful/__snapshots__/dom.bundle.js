// tags/card.marko
const $if_content__input__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $if_content__input = /*@__PURE__*/ _fill_join("b2", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_attrs_content($scope, "a", $scope._.d);
	$if_content__input__script($scope);
}));
const $if = /*@__PURE__*/ _if(0, "<div></div>", " ", $if_content__input);
const $open = /*@__PURE__*/ _fill_let("b3", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $card_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 4, _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a0"), 0);
const $card_content = _content("a1", "<em> </em>", "D ", $card_content__input_note);
