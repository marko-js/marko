// tags/card/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input.fn("x"));

// template.marko
const $if_content__fmt = /*@__PURE__*/ _fill_join("a9", 9, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.a, { fn: $scope._.j })));
const $if_content__setup = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__alt._($scope);
	$if_content__last._($scope);
	$if_content__tag._($scope);
};
const $if_content__alt = /*@__PURE__*/ _fill_join("a10", 10, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.b, { fn: $scope._.k })));
const $if_content__last = /*@__PURE__*/ _fill_join("a11", 11, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.c, { fn: $scope._.l })));
const $if_content__tag = /*@__PURE__*/ _fill_join("a12", 12, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.d, { fn: $scope._.m })));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `${_w0}${_w1}${_w2}${_w3}`)($template, $template, $template, $template), /*@__PURE__*/ ((_w0, _w1, _w2, _w3) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&`)("D l", "D l", "D l", "D l"), $if_content__setup);
const $show = _let(13, ($scope) => $if($scope, $scope.n ? 0 : 1));
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.n);
}));
function $fmt2(s) {
	return s;
}
const $fmt = ($scope) => (s) => s + ":" + $scope.f;
const $last = ($scope) => (s) => s + ";" + $scope.f;
const $tag = ($scope) => (s) => s + "#" + $scope.f;
const $alt = ($scope) => (s) => s + "=" + $scope.f;
_resumed.a1 = $fmt2;
_bind_resume("a0 f", $fmt);
_bind_resume("a3 f", $last);
_bind_resume("a4 f", $tag);
_bind_resume("a2 f", $alt);
