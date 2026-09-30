// tags/demo-card.marko
const $selected = /*@__PURE__*/ _fill_let_change("b0", 7, ($scope) => _text($scope.b, String($scope.h)));
const $input_tab__OR__input_tabChange = /*@__PURE__*/ _init_or("b2", 6, ($scope) => $selected($scope, $scope.e, $scope.f));
const $input_tab = /*@__PURE__*/ _const(4, $input_tab__OR__input_tabChange);
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$selected($scope, +$scope.h + 1);
}));

// tags/page-b.marko
const $tab = /*@__PURE__*/ _fill_let("c1", 1, ($scope) => $input_tab($scope.a, $scope.b));
const $tabChange = ($scope) => (_new_tab) => {
	$tab($scope, _new_tab);
};
_resumed.c0 = $tabChange;
