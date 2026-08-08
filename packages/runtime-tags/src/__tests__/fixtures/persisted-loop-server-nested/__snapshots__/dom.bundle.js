// template.marko
const $for_content2__item = /*@__PURE__*/ _resume("a1", /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.c)));
const $for_content2__setup = $for_content2__item;
const $for_content2__s = ($scope, s) => _text($scope.b, s);
const $for_content2__$params = ($scope, $params3) => $for_content2__s($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of(0, "<li><!><!></li>", "D%b%", $for_content2__setup, $for_content2__$params);
const $for_content__input_list = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__for($scope, [$scope._.e])));
const $for_content__setup = $for_content__input_list;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const(2, $for_content2__item);
const $for = /*@__PURE__*/ _for_of(0, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, "b"]);
}));
