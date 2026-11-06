// tags/get.marko
const $input_a_1_1___script = _script("c3", ($scope) => _on($scope.a, "click", $scope.j));
const $input_a__OR__input_s__OR__input_m__script = _script("c0", ($scope) => {
	{
		const s = [...$scope.k];
		$res($scope, [
			$scope.g[1] === $scope.g,
			typeof $scope.g[1][0],
			s[1] === $scope.k,
			$scope.l.get("self") === $scope.l,
			typeof $scope.l.get("self").get("f")
		].join());
	}
});
const $input_s__script = _script("c2", ($scope) => _on($scope.b, "click", [...[...$scope.k][1]][0]));
const $input_m__script = _script("c1", ($scope) => _on($scope.c, "click", $scope.l.get("self").get("f")));
const $res = _let(13, ($scope) => _text($scope.d, $scope.n));

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $f = ($scope) => function() {
	console.log("fn", $scope._._.e);
};
_bind_resume("a0 >>e", $f);
