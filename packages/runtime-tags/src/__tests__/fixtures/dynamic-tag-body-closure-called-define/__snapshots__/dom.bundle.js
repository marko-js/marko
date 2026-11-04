// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $Note_content__walks = "D l";
const $Note_content__template = "<em> </em>";
const $inputonCarddiv_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Note_content__setup($scope.a);
};
const $inputonCarddiv_content = _content("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Note_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Note_content__walks), $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $Note_content__input_note = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d), 0, "a1");
const $Note_content__setup = $Note_content__input_note;
