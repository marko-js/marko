// tags/gm/index.marko
const $template = "<p> </p>";
const $z__OR__$global_mark = /*@__PURE__*/ _or_patch("b3", 6, ($scope) => _text($scope.a, $scope.e + $scope.$.mark));
const $z = /*@__PURE__*/ _const(4, $z__OR__$global_mark);
const $input_v__OR__$global_flag = /*@__PURE__*/ _or_patch("b2", 5, ($scope) => $z($scope, $scope.d + $scope.$.flag));
const $input_v = /*@__PURE__*/ _const(3, $input_v__OR__$global_flag);
const $global_flag = _fill_global("b0", $input_v__OR__$global_flag, "flag");
const $global_mark = _fill_global("b1", $z__OR__$global_mark, "mark");
function $setup($scope) {
	$global_flag($scope);
	$global_mark($scope);
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
	$input_v($scope.a, "a");
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $open = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.c);
}));
