// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $clickCount__script = _script("__tests__/template.marko_0_clickCount", ($scope) => _on($scope["#button/0"], "click", $scope.clickCount <= 1 ? () => {
	$clickCount($scope, $scope.clickCount + 1);
} : false));
const $clickCount = /* @__PURE__ */ _let("clickCount/2", ($scope) => {
	_text($scope["#text/1"], $scope.clickCount);
	$clickCount__script($scope);
});
function $setup($scope) {
	$clickCount($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
