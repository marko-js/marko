// template.marko
const $template = "<div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><div><span> </span></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div><button>bump</button>";
const $walks = "Z wn b";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
