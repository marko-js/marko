// template.marko
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, _script("a0", ($scope) => document.querySelector("main").dataset.title = $scope._.e)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if(0, "<p>big</p>", 0, $if_content__setup);
const $count = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f > 1 ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
