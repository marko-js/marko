// tags/box/index.marko
const $template = "<div class=box><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $box_content__input_a__OR__input_b = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.e + ":" + $scope._._.f));
const $box_content__input_a = /*@__PURE__*/ _fill_closure("a4", 4, /*@__PURE__*/ _closure_get(7, $box_content__input_a__OR__input_b, ($scope) => $scope._._, "a0"), 0);
const $box_content__setup = ($scope) => {
	$box_content__input_a($scope);
	$box_content__input_b($scope);
};
const $box_content__input_b = /*@__PURE__*/ _fill_closure("a5", 5, /*@__PURE__*/ _closure_get(8, $box_content__input_a__OR__input_b, ($scope) => $scope._._, "a1"), 0);
const $box_content = /*@__PURE__*/ _content$1("a2", "<p> </p>", "D ", $box_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope.a, $box_content($scope));
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
