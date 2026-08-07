// tags/counter/index.marko
const $template = "<button class=c> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
