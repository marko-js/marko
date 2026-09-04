// tags/widget/index.marko
const $template = "<em> </em>";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// template.marko
const $if_content__input_label = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_label($scope.a, $scope._.e)));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $count = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f > 1 ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
