// template.marko
const $template = "<button class=got></button><button class=direct></button><div> </div>";
const $walks = " b bD l";
const $a_getter = _hoist_resume("__tests__/template.marko_0_a#6/hoist", "a");
const $a2 = /*@__PURE__*/ _const("a", ($scope) => _assert_hoist($scope.a));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$a2($scope, $a($scope));
});
const $got = /*@__PURE__*/ _const("got");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		console.log($scope.got());
	});
	_on($scope["#button/1"], "click", function() {
		const direct = $a_getter($scope);
		console.log(direct());
	});
});
function $setup($scope) {
	$n($scope, 1);
	$got($scope, $getA($scope)());
	$setup__script($scope);
}
const $a = ($scope) => () => $scope.n;
const $getA = ($scope) => () => $a_getter($scope);
_resumed["__tests__/template.marko_0/a"] = $a;
_resumed["__tests__/template.marko_0/getA"] = $getA;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
