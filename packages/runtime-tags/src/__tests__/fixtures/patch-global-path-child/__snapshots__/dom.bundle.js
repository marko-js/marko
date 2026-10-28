// tags/path-child.marko
const $template = "<p> </p>";
const $setup__$global_o = /*@__PURE__*/ _fill_global_path_join("b0", ($scope) => _text($scope.a, $scope.$.o.x), "o", "x");
const $setup = $setup__$global_o;

// template.marko
const $if_content__setup__$global_k = /*@__PURE__*/ _fill_global_join("a0", ($scope) => _text($scope.a, $scope.$.k), "k");
const $if_content__setup = ($scope) => {
	$setup($scope.b);
	$if_content__setup__$global_k($scope);
};
const $if = /*@__PURE__*/ _if(1, /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)("D l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.c);
}));
