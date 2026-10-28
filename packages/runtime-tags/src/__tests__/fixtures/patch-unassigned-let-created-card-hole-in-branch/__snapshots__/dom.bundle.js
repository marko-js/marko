// tags/show-value.marko
const $template = "<em> </em>";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/card.marko
const $if_content__input_w = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_text($scope.b, $scope._.e);
	$input_value($scope.c, $scope._.e);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$if_content__n._($scope);
};
const $if_content__n = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section><b> </b> <i> </i>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `bD lbD l/${_w0}&`)("D l"), $if_content__setup);
const $n = fill("b1", /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f ? 0 : 1);
	$if_content__n($scope);
}));
