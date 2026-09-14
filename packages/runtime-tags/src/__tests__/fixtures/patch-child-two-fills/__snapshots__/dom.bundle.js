// tags/card/index.marko
const $template = "<h3> </h3><p> </p>";
const $walks = "D lD l";
const $input_title = ($scope, input_title) => _text($scope.a, input_title);
const $input_body = ($scope, input_body) => _text($scope.b, input_body);

// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_title($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__input_body._($scope);
};
const $if_content__input_body = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_body($scope.a, $scope._.f)));
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.g);
}));
