// template.marko
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of(0, "<p> </p>", "D ", 0, $for_content__$params);
const $if_content__input_items = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.e])));
const $if_content__setup = $if_content__input_items;
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $count = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f > 1 ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
