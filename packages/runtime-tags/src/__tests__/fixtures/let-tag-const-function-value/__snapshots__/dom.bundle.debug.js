// template.marko
const $template = "<div id=out></div><button></button>";
const $walks = "b b";
const $x__script = _script("__tests__/template.marko_0_x#2", ($scope) => {
	{
		document.getElementById("out").textContent = $scope.x();
	}
});
const $x = /*@__PURE__*/ _let("x/2", $x__script);
const $fn2 = $x;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, () => "b");
}));
function $setup($scope) {
	$fn2($scope, $fn);
	$setup__script($scope);
}
function $fn() {
	return "a";
}
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b b", $setup);
