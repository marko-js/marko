// template.marko
const $template = "<button></button><div> </div>";
const $walks = " bD l";
const $a_getter = _hoist_resume("__tests__/template.marko_0_a#5/hoist", "a");
const $a2 = /*@__PURE__*/ _const("a", ($scope) => _assert_hoist($scope.a));
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$a2($scope, $a($scope));
});
const $got = /*@__PURE__*/ _const("got");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	console.log($scope.got());
}));
function $setup($scope) {
	$n($scope, 1);
	$got($scope, { get: $obj($scope) }.get());
	$setup__script($scope);
}
const $a = ($scope) => () => $scope.n;
const $obj = ($scope) => () => $a_getter($scope);
_resumed["__tests__/template.marko_0/a"] = $a;
_resumed["__tests__/template.marko_0/obj"] = $obj;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
