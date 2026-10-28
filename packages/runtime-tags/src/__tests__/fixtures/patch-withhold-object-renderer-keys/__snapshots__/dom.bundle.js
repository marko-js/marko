// tags/card.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_signal("4 b1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e, ($_) => ({ class: "x" }))));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/holder.marko
const $frag_content = _content$1("c0", "<em>held</em>");
const $input_mode__OR__frag_content = /*@__PURE__*/ _or_resume("c1", 6, ($scope) => _attr_content($scope, "a", $scope.d ? $scope.f : null));
const $input_mode = /*@__PURE__*/ _const(3, $input_mode__OR__frag_content);

// template.marko
const $inputonCarddiv_content__input_note = /*@__PURE__*/ _init_resume("a1", /*@__PURE__*/ _fill_closure("a5", 7, /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.h), 0, "a2"), 0));
const $inputonCarddiv_content = _content$1("a0", "<em> </em>", "D ", $inputonCarddiv_content__input_note);
_content_resume($inputonCarddiv_content);
const $input_mode__OR__m = /*@__PURE__*/ _fill_signal("5 a4", /*@__PURE__*/ _or(9, ($scope) => $input_mode($scope.a, $scope.i || $scope.f)));
const $m = /*@__PURE__*/ _let(8, $input_mode__OR__m);
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$m($scope, !$scope.i);
}));
