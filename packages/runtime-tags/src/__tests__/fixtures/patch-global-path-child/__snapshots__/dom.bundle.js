// tags/path-child.marko
const $template = "<p> </p>";
const $global_o_x = /*@__PURE__*/ _fill_global_path("b0", ($scope) => _text($scope.a, $scope.$.o.x), "o", "x");
const $setup = $global_o_x;

// template.marko
const $if_content__$global_k = /*@__PURE__*/ _if_closure_patch("a3", 1, 0, ($scope) => _text($scope.a, $scope.$.k));
const $if_content__setup = ($scope) => {
	$if_content__$global_k._($scope);
	$setup($scope.b);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l"), $if_content__setup);
const $open = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $global_k = _fill_global("a0", $if_content__$global_k, "k");
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
