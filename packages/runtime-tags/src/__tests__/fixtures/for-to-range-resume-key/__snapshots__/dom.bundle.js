// template.marko
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$end($scope._, $scope._.b + 1);
}));
const $for_content__setup = ($scope) => {
	_text($scope.b, $scope.M);
	$for_content__setup__script($scope);
};
const $for = /* @__PURE__ */ _for_to(0, "<button>n=<!></button>", " Db%l", $for_content__setup);
const $end = /* @__PURE__ */ _let(1, ($scope) => $for($scope, [
	$scope.b,
	2,
	1
]));
