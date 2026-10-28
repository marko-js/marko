// tags/show-header.marko
const $template = "<!><!><!>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_header = $dynamicTag;

// tags/card.marko
const $if_content__input_header = /*@__PURE__*/ _fill("b1", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_header($scope.a, $scope._.f)));
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__input_header);
const $open = /*@__PURE__*/ _fill_let("b2", 4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.e);
}));

// template.marko
const $H_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a3", 3, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.d), 0, "a2"), 0));
const $H_content = _content$1("a0", "<em> </em>", "D ", $H_content__input_note);
_content_resume($H_content);
