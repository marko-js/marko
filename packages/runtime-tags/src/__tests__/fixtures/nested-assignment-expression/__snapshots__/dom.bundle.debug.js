// template.marko
const $template = "<button> </button>used to be <span> </span> which should be the same as <span> </span>";
const $walks = " D lbD lbD l";
const $clickCount__script = _script("__tests__/template.marko_0_clickCount", ($scope) => _on($scope["#button/0"], "click", function() {
	const last = $lastCount($scope, $clickCount($scope, $scope.clickCount + 1) - 1);
	$lastCount2($scope, last);
}));
const $clickCount = /* @__PURE__ */ _let("clickCount/4", ($scope) => {
	_text($scope["#text/1"], $scope.clickCount);
	$clickCount__script($scope);
});
const $lastCount = /* @__PURE__ */ _let("lastCount/5", ($scope) => _text($scope["#text/2"], $scope.lastCount));
const $lastCount2 = /* @__PURE__ */ _let("lastCount2/6", ($scope) => _text($scope["#text/3"], $scope.lastCount2));
function $setup($scope) {
	$clickCount($scope, 0);
	$lastCount($scope, 0);
	$lastCount2($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
