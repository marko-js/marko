// tags/badge/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input);

// template.marko
const $if_content__input_tag = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.b, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_tag._($scope);
	$input($scope.a, "x");
};
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
