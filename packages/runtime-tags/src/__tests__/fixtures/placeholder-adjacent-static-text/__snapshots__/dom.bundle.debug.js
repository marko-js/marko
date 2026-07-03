// template.marko
const $template = "<div id=only-placeholders>ab<!></div><div id=text-placeholder-text>mno<!></div><button>update</button>";
const $walks = "Db%lDb%l b";
const $x = /* @__PURE__ */ _let("x/3", ($scope) => _text($scope["#text/0"], $scope.x));
const $y = /* @__PURE__ */ _let("y/4", ($scope) => _text($scope["#text/1"], $scope.y));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$x($scope, "X2");
	$y($scope, "Y2");
}));
function $setup($scope) {
	$x($scope, "X");
	$y($scope, "Y");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
