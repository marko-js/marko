// template.marko
const $template = "<div> <button>Toggle</button></div>";
const $walks = "D b l";
const $show = /* @__PURE__ */ _let("show/2", ($scope) => _text($scope["#text/0"], $scope.show ? "Hello!" : ""));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
