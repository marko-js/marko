// tags/card/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input.fn("x"));

// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("a2", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.a, { fn: (s) => s + ":" + $scope._.e })));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__tag._($scope);
};
const $if_content__tag = /*@__PURE__*/ _fill_join("a3", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.b, { fn: $scope._.f })));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.g);
}));
const $tag = ($scope) => (s) => s + "#" + $scope.e;
_bind_resume("a0 e", $tag);
