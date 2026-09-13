// tags/wrap/index.marko
const $template = "<div><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $wrap_content__input_msg__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.e + ":" + $scope._._.f));
const $wrap_content__input_msg = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, $wrap_content__input_msg__OR__count, ($scope) => $scope._._), 0);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_msg($scope);
	$wrap_content__count($scope);
};
const $wrap_content__count = /*@__PURE__*/ _closure_get(7, $wrap_content__input_msg__OR__count, ($scope) => $scope._._);
const $wrap_content = /*@__PURE__*/ _content$1("a0", "<span> </span>", "D ", $wrap_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope.a, $wrap_content($scope));
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $count__closure = /*@__PURE__*/ _closure($wrap_content__count);
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	$if($scope, $scope.f < 2 ? 0 : 1);
	$count__closure($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
