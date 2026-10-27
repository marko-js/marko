// tags/card/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input.fn("x"));

// template.marko
const $if_content__key__OR__o = /*@__PURE__*/ _fill_join_if("a7", 10, /*@__PURE__*/ _fill_join_if("a6", 8, /*@__PURE__*/ _or(4, ($scope) => $input($scope.a, { fn: $scope._.k[$scope._.i] })), 0, 0), 0, 0);
const $if_content__key = /*@__PURE__*/ _if_closure(0, 0, $if_content__key__OR__o);
const $if_content__setup = ($scope) => {
	$if_content__key._($scope);
	$if_content__o._($scope);
	$if_content__o_key._($scope);
	$if_content__first._($scope);
	$if_content__tag._($scope);
};
const $if_content__o = /*@__PURE__*/ _if_closure(0, 0, $if_content__key__OR__o);
const $if_content__o_key = /*@__PURE__*/ _fill_join("a8", 11, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.d, $scope._.l)));
const $if_content__first = /*@__PURE__*/ _fill_join("a9", 13, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.b, { fn: $scope._.n })));
const $if_content__tag = /*@__PURE__*/ _fill_join("a10", 14, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.c, { fn: $scope._.o })));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<p> </p>`)($template, $template, $template), /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&D l`)("D l", "D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(15, ($scope) => $if($scope, $scope.p ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.p);
}));
const $o = ($scope) => (s) => s + ":" + $scope.f;
const $tag = ($scope) => (s) => s + "#" + $scope.f;
const $first = ($scope) => (s) => s + "=" + $scope.f;
_bind_resume("a0 f", $o);
_bind_resume("a2 f", $tag);
_bind_resume("a1 f", $first);
