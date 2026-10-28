// tags/child.marko
const $for_content__d = ($scope, d) => _text($scope.a, d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _fill_join_for("b5 | b4", 5, /*@__PURE__*/ _or_resume("b3", 3, ($scope) => $for_content__d($scope, $scope._.f + $scope.c)), 1);
const $for_content__input_b = /*@__PURE__*/ _for_closure(1, $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__input_b = /*@__PURE__*/ _init_resume("b0", /*@__PURE__*/ _fill_join("b4 b5", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f))));
const $if = /*@__PURE__*/ _if(0, "<i> </i>", "D ", $if_content__input_b);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $list = /*@__PURE__*/ _let(9, ($scope) => $input_items($scope.a, $scope.j));
const $show = /*@__PURE__*/ _let(10, ($scope) => $input_show($scope.a, $scope.k));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.c, "click", function() {
		$list($scope, $scope.j.concat("r"));
	});
	_on($scope.d, "click", function() {
		$show($scope, !$scope.k);
	});
});
