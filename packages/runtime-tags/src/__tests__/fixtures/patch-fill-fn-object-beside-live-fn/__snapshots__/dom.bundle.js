// tags/card/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input.fn("x"));

// template.marko
const $if_content__fmt = /*@__PURE__*/ _fill_join("a9", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.a, { fn: $scope._.g })));
const $if_content__setup = ($scope) => {
	$if_content__fmt._($scope);
	$if_content__wrap._($scope);
	$if_content__quoted._($scope);
	$if_content__keyed._($scope);
	$if_content__templated._($scope);
	$if_content__o_get._($scope);
	$if_content__o_._($scope);
	$if_content__tag._($scope);
};
const $if_content__wrap = /*@__PURE__*/ _fill_join("a10", 7, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.b, { fn: $scope._.h })));
const $if_content__quoted = /*@__PURE__*/ _fill_join("a11", 8, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.c, { fn: $scope._.i })));
const $if_content__keyed = /*@__PURE__*/ _fill_join("a12", 9, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.d, { fn: $scope._.j })));
const $if_content__templated = /*@__PURE__*/ _fill_join("a13", 10, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.e, { fn: $scope._.k })));
const $if_content__o_get = /*@__PURE__*/ _fill_join("a14", 12, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.f, { fn: $scope._.m })));
const $if_content__o_ = /*@__PURE__*/ _fill_join("a15", 13, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.g, { fn: $scope._.n })));
const $if_content__tag = /*@__PURE__*/ _fill_join("a16", 14, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.h, { fn: $scope._.o })));
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7) => `${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}`)($template, $template, $template, $template, $template, $template, $template, $template), /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&`)("D l", "D l", "D l", "D l", "D l", "D l", "D l", "D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(15, ($scope) => $if($scope, $scope.p ? 0 : 1));
const $setup__script = _script("a8", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.p);
}));
const $fmtWrapQuotedKeyedTemplated5 = ($scope) => (s) => s + "`" + $scope.e;
const $fmtWrapQuotedKeyedTemplated4 = ($scope) => (s) => s + "[" + $scope.e;
const $fmtWrapQuotedKeyedTemplated3 = ($scope) => (s) => s + "'" + $scope.e;
const $fmtWrapQuotedKeyedTemplated2 = ($scope) => function(s) {
	return "(" + s + $scope.e + ")";
};
const $fmtWrapQuotedKeyedTemplated = ($scope) => (s) => s + ":" + $scope.e;
const $o2 = ($scope) => (s) => s + "0" + $scope.e;
const $o = ($scope) => (s) => s + "=" + $scope.e;
const $tag = ($scope) => (s) => s + "#" + $scope.e;
_bind_resume("a4 e", $fmtWrapQuotedKeyedTemplated5);
_bind_resume("a3 e", $fmtWrapQuotedKeyedTemplated4);
_bind_resume("a2 e", $fmtWrapQuotedKeyedTemplated3);
_bind_resume("a1 e", $fmtWrapQuotedKeyedTemplated2);
_bind_resume("a0 e", $fmtWrapQuotedKeyedTemplated);
_bind_resume("a6 e", $o2);
_bind_resume("a5 e", $o);
_bind_resume("a7 e", $tag);
