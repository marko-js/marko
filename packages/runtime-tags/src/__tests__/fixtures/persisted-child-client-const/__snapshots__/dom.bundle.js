// tags/widget/index.marko
const $template = "<button class=c><!>:<!></button>";
const $walks = " D%c%l";
const $n = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.g + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// template.marko
const $if_content__setup = ($scope) => {
	$setup($scope.a);
	$input_label($scope.a, "fixed");
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
