// template.marko
const $if_content__title = /*@__PURE__*/ _const(1);
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__title($scope, $scope._.e)));
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	document.querySelector("main").dataset.title = $scope.b;
}));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(0, "<button>read</button>", " ", $if_content__setup);
const $count = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f > 1 ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
