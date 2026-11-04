// tags/widget/index.marko
const $template = "<p> </p>";
const $input_title = /*@__PURE__*/ _const(3, ($scope) => _text($scope.a, (() => "t:" + $scope.d)()));

// template.marko
const $if_content__input_title = /*@__PURE__*/ _if_closure_patch("a0", 0, 0, ($scope) => $input_title($scope.a, $scope._.e));
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__input_title);
const $show = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.f);
}));
