// tags/wrap.marko
const $row_content__input_label__OR__item = /*@__PURE__*/ _or_patch("c1", 2, ($scope) => _text($scope.a, $scope.b + $scope._.e));
const $row_content__input_label = /*@__PURE__*/ _closure_get_patch("c0", 5, $row_content__input_label__OR__item, 0, "c4", 0);
const $setup__script$1 = _script("c3", ($scope) => document.body.dataset.ready = "1");
const $input_label__closure = /*@__PURE__*/ _closure($row_content__input_label);
const $input_label = /*@__PURE__*/ _const(4, $input_label__closure);

// template.marko
const $c = _let(5, ($scope) => $input_label($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$c($scope, $scope.f + "!");
}));
