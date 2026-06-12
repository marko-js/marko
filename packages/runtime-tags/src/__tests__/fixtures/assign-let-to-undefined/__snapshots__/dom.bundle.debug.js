// template.marko
const $template = "<div> </div><button>clear</button>";
const $walks = "D l b";
const $double = ($scope, double) => _text($scope["#text/0"], double == null ? "none" : double);
const $num = /* @__PURE__ */ _let("num/2", ($scope) => $double($scope, $scope.num && $scope.num * 2));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$num($scope, undefined);
}));
function $setup($scope) {
	$num($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
