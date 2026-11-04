// tags/child.marko
const $for_content__input_b__OR__item = /*@__PURE__*/ _or_patch("b2", 3, ($scope) => _text($scope.a, $scope._.e + $scope.c));
const $for_content__input_b = /*@__PURE__*/ _for_closure_patch("b5", 1, $for_content__input_b__OR__item, 10);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $frag_content__input_b = /*@__PURE__*/ _closure_get_patch("b1", 10, ($scope) => _text($scope.a, $scope._.e), 0, "b4", 0);
const $frag_content = _content$1("b0", "<i> </i>", "D ", $frag_content__input_b);
const $input_mode__OR__frag_content = /*@__PURE__*/ _or_patch("b6", 9, ($scope) => _attr_content($scope, "a", $scope.f ? $scope.i : null));
const $input_mode = /*@__PURE__*/ _const(5, $input_mode__OR__frag_content);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $list = _let(6, ($scope) => $input_items($scope.a, $scope.g));
const $m = _let(7, ($scope) => $input_mode($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$list($scope, $scope.g.concat("r"));
	});
	_on($scope.c, "click", function() {
		$m($scope, !$scope.h);
	});
});
