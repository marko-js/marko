// template.marko
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$obj($scope._, {
		...$scope._.b,
		cde: 2
	});
}));
const $for_content__setup = ($scope) => {
	_text($scope.b, $scope.M);
	_text($scope.c, $scope.M?.length);
	$for_content__setup__script($scope);
};
const $for = /*@__PURE__*/ _for_in(0, "<button><!>:<!></button>", " D%c%", $for_content__setup);
const $obj = /*@__PURE__*/ _let(1, ($scope) => $for($scope, [$scope.b]));
