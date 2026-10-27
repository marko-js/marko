// tags/child.marko
const $for_content__d = ($scope, d) => _text($scope.a, d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _or(3, ($scope) => $for_content__d($scope, $scope._.e + $scope.c));
const $for_content__input_b = /*@__PURE__*/ _for_closure(1, $for_content__input_b__OR__item);
const $for_content__setup = $for_content__input_b;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $input_b__script = _script("b0", ($scope) => $scope.a.textContent = "s:" + $scope.e);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $list = /*@__PURE__*/ _let(5, ($scope) => $input_items($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, $scope.f.concat("r"));
}));
