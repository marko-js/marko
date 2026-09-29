// tags/widget/index.marko
const $template = "<em> </em>";
const $input_text = ($scope, input_text) => _text($scope.a, input_text);

// template.marko
const $if_content__brand = /*@__PURE__*/ _fill_join("a0", 2, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_text($scope.a, $scope._.c)));
const $if_content__setup = $if_content__brand;
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.e);
}));
