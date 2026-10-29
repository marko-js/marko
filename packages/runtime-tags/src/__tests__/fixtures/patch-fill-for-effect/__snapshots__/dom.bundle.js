// template.marko
const $for_content__input_label__OR__count__OR__item = /*@__PURE__*/ _or_resume("a3", 4, ($scope) => _text($scope.a, $scope._.g + " " + $scope.c + ": " + $scope._.h), 2);
const $for_content__input_label__OR__item__script = _script("a0", ($scope) => document.body.dataset[$scope.c] = $scope._.g);
const $for_content__input_label__OR__item = /*@__PURE__*/ _or_resume("a2", 3, $for_content__input_label__OR__item__script);
const $for_content__input_label = /*@__PURE__*/ _for_closure(0, ($scope) => {
	$for_content__input_label__OR__count__OR__item($scope);
	$for_content__input_label__OR__item($scope);
});
const $for_content__count = /*@__PURE__*/ _init_resume("a8", /*@__PURE__*/ _for_closure(0, $for_content__input_label__OR__count__OR__item));
_fill_run("a1", 2, /*@__PURE__*/ _fill_mark(2, $for_content__input_label__OR__count__OR__item));
const $count = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.c, $scope.h);
	$for_content__count($scope);
});
const $setup__script = _script("a5", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
const $input_label = fill("a6", /*@__PURE__*/ _const(6, $for_content__input_label));
