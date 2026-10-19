// template.marko
const $Info_content__input_page__OR__label__script = _script("a2", ($scope) => console.log("info", $scope.c, $scope._.g));
const $Info_content__input_page__OR__label = /*@__PURE__*/ _shell_or("a4", 3, $Info_content__input_page__OR__label__script);
const $Info_content__label = /*@__PURE__*/ _const(2, $Info_content__input_page__OR__label);
const $count = /*@__PURE__*/ _fill_let("a7", 9, ($scope) => {
	_text($scope.b, $scope.j);
	$Info_content__label($scope.c, $scope.j);
});
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.j + 1);
}));
