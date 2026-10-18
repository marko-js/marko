// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<em> </em>";
const $inputonCarddiv_content__setup = ($scope) => {
	$scope.a._ = $scope._._._;
	$Body_content__setup($scope.a);
};
const $inputonCarddiv_content = _content$1("a0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $inputonCarddiv_content__setup);
const $Body_content__input_note = /*@__PURE__*/ _fill_join_closure("a6", 3, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.d), 0, "a5"), 0);
const $Body_content__setup = $Body_content__input_note;
