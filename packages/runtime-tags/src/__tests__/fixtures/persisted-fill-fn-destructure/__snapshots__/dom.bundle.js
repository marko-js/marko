// tags/card/index.marko
const $template = "<em> </em>";
const $input = ($scope, input) => _text($scope.a, input.fn("x"));

// template.marko
const $if_content__fmt = /*@__PURE__*/ _fill_join("a0", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input($scope.a, { fn: $scope._.g })));
const $if_content__setup = $if_content__fmt;
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.h);
}));
function $fmt($scope) {
	return (s) => s + ":" + $scope.e;
}
_resume("a0", $fmt);
