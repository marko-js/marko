// template.marko
const $for_content__input_note = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._), _closure);
const $for_content__setup = $for_content__input_note;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__for = /*@__PURE__*/ _for_of(0, "<li><!>: <!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $if_content__items = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.h]));
const $if_content__setup = $if_content__items;
const $if = /*@__PURE__*/ _if(0, "<ul></ul>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $items = /*@__PURE__*/ _let(7, $if_content__items);
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$show($scope, !$scope.g);
	});
	_on($scope.c, "click", function() {
		$items($scope, [...$scope.h, "b"]);
	});
});
