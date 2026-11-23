// template.marko
const $if_content__set__script = _script("a0", ($scope) => _on($scope.a, "click", $scope.b));
const $if_content__set = /*@__PURE__*/ _const(1, $if_content__set__script);
const $if_content__setup = ($scope) => $if_content__set($scope, (() => () => {
	(($result3, $a2) => ({a: $a2 = 1} = $result3, $a($scope._, $a2), $result3))({});
	(($result2, $b2, $c2) => ([$b2, $c2] = $result2, $b($scope._, $b2), $c($scope._, $c2), $result2))([2, 3]);
	(($result, $d2) => ({x: [$d2]} = $result, $d($scope._, $d2), $result))({ x: [4] });
})());
const $a = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $b = /*@__PURE__*/ _let(7, ($scope) => _text($scope.d, $scope.h));
const $c = /*@__PURE__*/ _let(8, ($scope) => _text($scope.e, $scope.i));
const $d = /*@__PURE__*/ _let(9, ($scope) => _text($scope.f, $scope.j));
const $if = /*@__PURE__*/ _if(1, "<button class=set>set</button>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let(10, ($scope) => $if($scope, $scope.k ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
