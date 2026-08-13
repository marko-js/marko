// template.marko
const $Child_content__$el_getter = _el("a1", 0);
const $Child_content__input_onClick = /*@__PURE__*/ _const(3, _script("a3", ($scope) => _on($scope.a, "click", $scope.d)));
const $onClick = ($scope) => function() {
	$scope.c().innerHTML = "clicked";
};
_resume("a0", $onClick);
