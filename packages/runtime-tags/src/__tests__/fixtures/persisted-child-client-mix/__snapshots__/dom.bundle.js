// tags/label/index.marko
const $template = "<em> </em>";
const $input_text = ($scope, input_text) => _text($scope.a, input_text);

// template.marko
const $if_content__input_suffix__OR__count = /*@__PURE__*/ _fill_join_if("a0", 5, /*@__PURE__*/ _or(1, ($scope) => $input_text($scope.a, $scope._.g + $scope._.f)), 0, 0);
const $if_content__input_suffix = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_suffix__OR__count);
const $if_content__setup = ($scope) => {
	$if_content__input_suffix._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_suffix__OR__count);
const $count = /*@__PURE__*/ _let(6, $if_content__count);
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $if_content__setup);
const $show = /*@__PURE__*/ _let(7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$count($scope, $scope.g + 1);
	});
	_on($scope.c, "click", function() {
		$show($scope, !$scope.h);
	});
});
const $input_suffix = _fill_const("a0", 5, $if_content__input_suffix);
