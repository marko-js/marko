// tags/child.marko
const $for_content__input_a__OR__d = /*@__PURE__*/ _or_patch("b1", 2, ($scope) => _text($scope.a, $scope._.f + $scope.b));
const $for_content__d = /*@__PURE__*/ _const(1, $for_content__input_a__OR__d);
const $for_content__input_b = /*@__PURE__*/ _for_closure_patch("b0", 0, ($scope) => $for_content__d($scope, $scope._.e + "!"), 6);
const $for_content__setup = ($scope) => {
	$for_content__input_b._($scope);
	$for_content__input_a._($scope);
};
const $for_content__input_a = /*@__PURE__*/ _for_closure_patch("b3", 0, $for_content__input_a__OR__d, 7);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<p> </p>", "D ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input_a = /*@__PURE__*/ _const(5, $for_content__input_a);

// template.marko
const $n = _let(6, ($scope) => $input_a($scope.a, $scope.g));
const $list = _let(7, ($scope) => $input_items($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$n($scope, $scope.g + "k");
	});
	_on($scope.c, "click", function() {
		$list($scope, $scope.h.concat("r"));
	});
});
