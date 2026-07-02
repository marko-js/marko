// template.marko
const $template = "<div><button> </button></div>";
const $walks = "D D m";
const $clickCount = /* @__PURE__ */ _let("clickCount/2", ($scope) => _text($scope["#text/1"], $scope.clickCount));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clickCount($scope, $scope.clickCount + 1);
}));
function $setup($scope) {
	123;
	456;
	$clickCount($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
