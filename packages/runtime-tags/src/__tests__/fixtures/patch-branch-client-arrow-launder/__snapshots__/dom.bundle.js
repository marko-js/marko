// template.marko
const $if_content__label = ($scope, label) => _text($scope.a, label());
const $if_content__mk = /*@__PURE__*/ _const(1, ($scope) => $if_content__label($scope, (fn = $scope.b) => fn()));
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__mk($scope, () => $scope._.e)));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
