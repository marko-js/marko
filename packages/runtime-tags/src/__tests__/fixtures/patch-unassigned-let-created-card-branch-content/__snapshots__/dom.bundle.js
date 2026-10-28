// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// tags/show-value.marko
const $template = "<em> </em>";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/card.marko
const $wrap_content__input_w = /*@__PURE__*/ _fill_join_closure("b2", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.b, $scope._._.e), ($scope) => $scope._._, "b0"), 0);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_w($scope);
	$wrap_content__n($scope);
};
const $wrap_content__n = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._);
const $wrap_content = /*@__PURE__*/ _content$1("b1", "<b> </b> <i> </i>", "D lbD ", $wrap_content__setup);
const $if_content__input_w = /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_value($scope.b, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$input_content_direct($scope.a, $wrap_content($scope));
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D%l", "D l"), $if_content__setup);
const $n__closure = /*@__PURE__*/ _closure($wrap_content__n);
const $n = fill("b3", /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$n__closure($scope);
}));
