// tags/tagged/index.marko
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// template.marko
const $for_content__count__OR__item_id = /*@__PURE__*/ _fill_join("a1", 5, /*@__PURE__*/ _or(6, ($scope) => $input_label($scope.a, `${$scope.f}:${$scope._.f}`)));
const $for_content__count = _shell_for_closure("a5", 0, $for_content__count__OR__item_id);
const $count = /*@__PURE__*/ _fill_let("a3", 5, $for_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
