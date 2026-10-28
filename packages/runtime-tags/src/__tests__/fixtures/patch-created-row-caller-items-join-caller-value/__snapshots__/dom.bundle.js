// tags/child.marko
const $for_content__d = ($scope, d) => _text($scope.a, d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _fill_join_for("b4 | b3", 5, /*@__PURE__*/ _or_resume("b0", 3, ($scope) => $for_content__d($scope, $scope._.f + $scope.c)), 1);
const $for_content__input_b = /*@__PURE__*/ _for_closure(1, $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__input_b = /*@__PURE__*/ _fill_join("b3 b4", 5, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.f)));
const $if = /*@__PURE__*/ _if(0, "<i> </i>", "D ", $if_content__input_b);
const $open = /*@__PURE__*/ _fill_let("b5", 7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script$1 = _script("b2", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.h);
}));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input_b = /*@__PURE__*/ _fill_const("b3", 5, ($scope) => {
	$if_content__input_b($scope);
	$for_content__input_b($scope);
}, /*@__PURE__*/ _fill_mark(5, $if_content__input_b));

// template.marko
const $if_content__list = /*@__PURE__*/ _init_resume("a3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_items($scope.a, $scope._.g)));
const $if_content__b = /*@__PURE__*/ _init_resume("a4", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_b($scope.a, $scope._.h)));
const $list = /*@__PURE__*/ _let(6, $if_content__list);
const $b = /*@__PURE__*/ _let(7, $if_content__b);
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$list($scope, $scope.g.concat("r"));
	});
	_on($scope.c, "click", function() {
		$b($scope, $scope.h + "!");
	});
});
