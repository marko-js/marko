// template.marko
const $if_content2__count = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._._.h), ($scope) => $scope._._, "a0");
const $if_content__if = /*@__PURE__*/ _if(0, " ", " ", $if_content2__count);
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.f ? 0 : 1));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_b);
const $a = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $count = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($if_content2__count));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$count($scope, +$scope.h + 1);
	});
	_on($scope.c, "click", function() {
		$a($scope, !$scope.g);
	});
});
