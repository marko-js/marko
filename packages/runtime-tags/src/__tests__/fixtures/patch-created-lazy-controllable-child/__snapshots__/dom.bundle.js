// tags/tab-editor.marko
const $selected = /*@__PURE__*/ _let_change(6, ($scope) => _text($scope.a, String($scope.g)));
const $input_tab__OR__input_tabChange = /*@__PURE__*/ _fill_join("c1", 4, /*@__PURE__*/ _fill_join("c0", 3, /*@__PURE__*/ _shell_or("c2", 5, ($scope) => $selected($scope, $scope.d, $scope.e))));
const $input_tab = /*@__PURE__*/ _const(3, $input_tab__OR__input_tabChange);

// tags/route-pg.marko
const $tab = /*@__PURE__*/ _fill_let("b2", 2, ($scope) => $input_tab($scope.a, $scope.c));
const $setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$tab($scope, +$scope.c + 1);
}));
const $tabChange = ($scope) => (_new_tab) => {
	$tab($scope, _new_tab);
};
_resumed.b0 = $tabChange;
