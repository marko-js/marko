// template.marko
const $for_content__n = ($scope, n) => _text($scope.a, n);
const $for_content__$params = ($scope, $params2) => $for_content__n($scope, $params2[0].n);
const $for = /*@__PURE__*/ _for_of(0, "<span> </span>", "D ", 0, $for_content__$params);
const $list = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c, "id"]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, [{
		id: 1,
		n: "b"
	}, {
		id: 2,
		n: "c"
	}]);
}));
