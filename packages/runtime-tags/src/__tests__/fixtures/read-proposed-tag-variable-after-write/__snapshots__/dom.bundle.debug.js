// template.marko
const $template = "<div><button> </button><div></div><div></div></div>";
const $walks = "D D l b l";
const $clickCount = /* @__PURE__ */ _let("clickCount/4", ($scope) => _text($scope["#text/1"], $scope.clickCount));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	_el_read($scope["#div/2"]).innerHTML = $clickCount($scope, $scope.clickCount + 1) - 1;
	_el_read($scope["#div/3"]).innerHTML = $scope.clickCount;
}));
function $setup($scope) {
	$clickCount($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
