// tags/child.marko
const $if_content__input_a__script = _script("b2", ($scope) => $scope.a.textContent = "s:" + $scope._.g);
const $if_content__input_a = /*@__PURE__*/ _fill_join("b4 b5", 6, /*@__PURE__*/ _if_closure(1, 0, $if_content__input_a__script));
const $if_content__setup = $if_content__input_a;
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_join_for("b5 | b4", 6, /*@__PURE__*/ _or_resume("b0", 3, ($scope) => _text($scope.a, $scope._.g + $scope.c)), 0);
const $for_content__input_a = /*@__PURE__*/ _for_closure(0, $for_content__input_a__OR__item);
const $for_content__setup = $for_content__input_a;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_a__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if = /*@__PURE__*/ _if(1, "<div></div>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b6", 7, ($scope) => $if($scope, $scope.h ? 0 : 1));
const $setup__script$1 = _script("b3", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.h);
}));
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $list = _let(7, ($scope) => $input_items($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$list($scope, $scope.h.concat("r"));
}));
