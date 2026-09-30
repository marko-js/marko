// template.marko
const $template = "<div>Hello  World <button>click</button><span> </span></div>";
const $walks = "Db bD m";
const $m = /*@__PURE__*/ _const("m");
const $n = /*@__PURE__*/ _let("n/2", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$m($scope, $scope.n * 2);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + $scope.m);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
