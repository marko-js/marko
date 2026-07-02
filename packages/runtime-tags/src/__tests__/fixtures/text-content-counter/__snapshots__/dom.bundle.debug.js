// template.marko
const $template = "<div><button id=button>0</button></div>";
const $walks = "D l";
const $clickCount__script = _script("__tests__/template.marko_0_clickCount", ($scope) => document.getElementById("button").textContent = $scope.clickCount);
const $clickCount = /* @__PURE__ */ _let("clickCount/1", $clickCount__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clickCount($scope, $scope.clickCount + 1);
}));
function $setup($scope) {
	$clickCount($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "D l", $setup);
