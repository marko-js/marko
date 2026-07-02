// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $a = /* @__PURE__ */ _let("a/2", ($scope) => _text($scope["#text/1"], $scope.a.join("")));
const $b = /* @__PURE__ */ _let("b/3");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$a($scope, $scope.a.map((a) => $scope.b));
}));
function $setup($scope) {
	$a($scope, [0]);
	$b($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
