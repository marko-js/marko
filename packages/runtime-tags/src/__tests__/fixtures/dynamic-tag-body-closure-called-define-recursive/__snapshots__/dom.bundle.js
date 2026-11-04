// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $Tree_content__walks = "D l%c";
const $Tree_content__template = "<em> </em><!><!>";
const $inputonCarddiv_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Tree_content__setup($scope.a);
	$Tree_content__tag_input_n($scope.a, 1);
};
const $inputonCarddiv_content = _content("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $inputonCarddiv_content__setup);
_content_resume($inputonCarddiv_content);
const $if_content__n = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $Tree_content__tag_input_n($scope.a, $scope._.e - 1));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	$scope.a._ = $scope._._;
	$Tree_content__setup($scope.a);
};
const $Tree_content__input_note = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d), 0, "a1");
const $Tree_content__setup = $Tree_content__input_note;
const $Tree_content__if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $Tree_content__tag_input_n = /*@__PURE__*/ _const(4, ($scope) => {
	$Tree_content__if($scope, $scope.e ? 0 : 1);
	$if_content__n($scope);
});
