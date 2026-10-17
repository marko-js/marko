// tags/child.marko
const $for_content__d = ($scope, d) => _text($scope.a, d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _fill_join_for("b7", 4, /*@__PURE__*/ _fill_join_value("b5", 4, /*@__PURE__*/ _shell_or("b4", 3, ($scope) => $for_content__d($scope, $scope._.e + $scope.c))), 1);
const $for_content__input_b = /*@__PURE__*/ _for_closure(1, $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $frag_content__input_b = /*@__PURE__*/ _shell_init("b2", /*@__PURE__*/ _fill_join_closure("b7", 4, /*@__PURE__*/ _fill_join_closure("b6", 4, /*@__PURE__*/ _closure_get(10, ($scope) => _text($scope.a, $scope._.e), 0, "b3"), 0), 0));
const $frag_content = _content$1("b0", "<i> </i>", "D ", $frag_content__input_b);
const $input_mode__OR__frag_content = /*@__PURE__*/ _shell_or("b8", 9, ($scope) => _attr_content($scope, "a", $scope.f ? $scope.i : null));
const $input_mode = /*@__PURE__*/ _const(5, $input_mode__OR__frag_content);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $list = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => $input_items($scope.a, $scope.g));
const $m = /*@__PURE__*/ _fill_let("a2", 7, ($scope) => $input_mode($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$list($scope, $scope.g.concat("r"));
	});
	_on($scope.c, "click", function() {
		$m($scope, !$scope.h);
	});
});
