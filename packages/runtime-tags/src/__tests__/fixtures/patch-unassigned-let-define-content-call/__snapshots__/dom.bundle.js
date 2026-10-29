// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f)));
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__input_content);
const $n = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g < 2 ? 0 : 1);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $wrap_content__setup = ($scope) => {
	$scope.a._ = $scope._._;
	$Body_content__setup($scope.a);
};
const $wrap_content = _content("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks), $wrap_content__setup);
const $Body_content__input_w = /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "a1"), 0);
const $Body_content__setup = $Body_content__input_w;
