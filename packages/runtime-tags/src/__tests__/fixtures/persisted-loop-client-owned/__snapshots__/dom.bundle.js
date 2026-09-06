// template.marko
const $for_content__input_note = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.e)));
const $for_content__setup = $for_content__input_note;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<li><!>: <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, "b"]);
}));
