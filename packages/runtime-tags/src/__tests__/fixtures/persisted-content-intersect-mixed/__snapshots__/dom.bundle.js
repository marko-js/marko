// tags/box/index.marko
const $template = "<div class=box><!></div>";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content(0);

// template.marko
const $box_content__input_a__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.i + ":" + $scope._._.g));
const $box_content__input_a = /*@__PURE__*/ _fill_join_closure("a0", 6, /*@__PURE__*/ _closure_get(9, $box_content__input_a__OR__count, ($scope) => $scope._._), 0);
const $box_content__setup = ($scope) => {
	$box_content__input_a($scope);
	$box_content__count($scope);
};
const $box_content__count = /*@__PURE__*/ _closure_get(10, $box_content__input_a__OR__count, ($scope) => $scope._._);
const $box_content = /*@__PURE__*/ _content("a0", "<p> </p>", "D ", $box_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope.a, $box_content($scope));
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $count__closure = /*@__PURE__*/ _closure($box_content__count);
const $count = /*@__PURE__*/ _let(8, ($scope) => {
	_text($scope.d, $scope.i);
	$count__closure($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$open($scope, !$scope.h);
	});
	_on($scope.c, "click", function() {
		$count($scope, +$scope.i + 1);
	});
});
