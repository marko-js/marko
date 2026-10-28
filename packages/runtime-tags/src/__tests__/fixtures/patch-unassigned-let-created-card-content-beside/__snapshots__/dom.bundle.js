// tags/show-value.marko
const $template = "<em> </em>";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/card.marko
const $wrap_content__n = /*@__PURE__*/ _init_resume("b4", /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g)));
const $if_content__input_w = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_value($scope.a, $scope._.f)));
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)("D l"), $if_content__input_w);
const $n__closure = /*@__PURE__*/ _closure($wrap_content__n);
const $n = fill("b2", /*@__PURE__*/ _let(6, ($scope) => {
	$if($scope, $scope.g ? 0 : 1);
	$n__closure($scope);
}));
