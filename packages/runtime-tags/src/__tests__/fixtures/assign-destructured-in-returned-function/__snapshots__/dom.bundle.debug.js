// template.marko
const $template = "<button class=show>show</button><!><div><!> <!> <!> <!></div>";
const $walks = " b%bD%c%c%c%l";
const $if_content__set__script = _script("__tests__/template.marko_1_set#1", ($scope) => _on($scope["#button/0"], "click", $scope.set));
const $if_content__set = /*@__PURE__*/ _const("set", $if_content__set__script);
const $if_content__setup = ($scope) => $if_content__set($scope, (() => () => {
	(($result3, $a2) => ({a: $a2 = 1} = $result3, $a($scope._, $a2), $result3))({});
	(($result2, $b2, $c2) => ([$b2, $c2] = $result2, $b($scope._, $b2), $c($scope._, $c2), $result2))([2, 3]);
	(($result, $d2) => ({x: [$d2]} = $result, $d($scope._, $d2), $result))({ x: [4] });
})());
const $a = /*@__PURE__*/ _let("a/6", ($scope) => _text($scope["#text/2"], $scope.a));
const $b = /*@__PURE__*/ _let("b/7", ($scope) => _text($scope["#text/3"], $scope.b));
const $c = /*@__PURE__*/ _let("c/8", ($scope) => _text($scope["#text/4"], $scope.c));
const $d = /*@__PURE__*/ _let("d/9", ($scope) => _text($scope["#text/5"], $scope.d));
const $if = /*@__PURE__*/ _if("#text/1", "<button class=set>set</button>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/10", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
	$c($scope, 0);
	$d($scope, 0);
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
