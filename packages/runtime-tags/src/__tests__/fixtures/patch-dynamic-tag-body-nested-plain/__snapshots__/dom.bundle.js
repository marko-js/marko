// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/plain.marko
const $template = "<section><!></section>";
const $walks = "D%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var plain_default = /*@__PURE__*/ _template("c", $template, "D%l", 0, $input);

// template.marko
const $inputpPlainspan_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a7", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a2"), 0));
const $inputpPlainspan_content = _content$1("a0", "<em> </em>", "D ", $inputpPlainspan_content__input_note);
_content_resume($inputpPlainspan_content);
const $inputonCarddiv_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputpPlainspan_content);
const $inputonCarddiv_content__input_p = /*@__PURE__*/ _init_resume("a4", /*@__PURE__*/ _fill_closure("a6", 4, /*@__PURE__*/ _closure_get(6, ($scope) => $inputonCarddiv_content__dynamicTag($scope, $scope._.e ? plain_default : "span"), 0, "a5"), 0));
const $inputonCarddiv_content = _content$1("a3", "<!><!><!>", "b%", $inputonCarddiv_content__input_p);
_content_resume($inputonCarddiv_content);
