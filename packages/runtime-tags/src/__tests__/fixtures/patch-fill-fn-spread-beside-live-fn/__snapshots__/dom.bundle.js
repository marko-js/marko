// tags/card/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input.fn("x"));

// template.marko
const $if_content__chars = /*@__PURE__*/ _fill_join("a4", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.a, { fn: $scope._.g })));
const $if_content__setup = ($scope) => {
	$if_content__chars._($scope);
	$if_content__items._($scope);
	$if_content__tag._($scope);
};
const $if_content__items = /*@__PURE__*/ _fill_join("a5", 8, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.b, { fn: $scope._.i })));
const $if_content__tag = /*@__PURE__*/ _fill_join("a6", 9, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.c, { fn: $scope._.j })));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}`)($template, $template, $template), /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&`)("D l", "D l", "D l"), $if_content__setup);
const $show = _let(10, ($scope) => $if($scope, $scope.k ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.k);
}));
const $chars = ($scope) => (s) => s + ":" + $scope.e;
const $items = ($scope) => (s) => s + "=" + $scope.e;
const $tag = ($scope) => (s) => s + "#" + $scope.e;
_bind_resume("a0 e", $chars);
_bind_resume("a1 e", $items);
_bind_resume("a2 e", $tag);
