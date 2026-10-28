// tags/card/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input.fn("x"));

// template.marko
const $if_content__fmt = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.a, { fn: $scope._.g }));
const $if_content__setup = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__tag._($scope);
};
const $if_content__tag = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.b, { fn: $scope._.h }));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(8, ($scope) => $if($scope, $scope.i ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.i);
}));
const $fmt = ($scope) => (s) => s + ":" + $scope.e;
const $tag = ($scope) => (s) => s + "#" + $scope.e;
_resumed.a0 = $fmt;
_resumed.a1 = $tag;
