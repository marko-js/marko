// tags/widget/index.marko
const $template = "<em> </em>";
const $input_label = ($scope, input_label) => _text($scope.a, input_label || "x");

// template.marko
const $if_content__setup = ($scope) => $input_label($scope.a, "a");
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
