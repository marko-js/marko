// template.marko
const $for_content__input_note = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.e)));
const $for_content__setup = ($scope) => {
	$for_content__input_note._($scope);
	_text($scope.a, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(0, "<li><!>: <!></li>", "D%c%", $for_content__setup);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f, "id"]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [{ id: $scope.f?.length + 1 }, ...$scope.f]);
}));
