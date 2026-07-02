// template.marko
const $template = "<button class=toggle>toggle</button><button class=bump>bump</button><button class=act>act</button><div class=state><!>:<!></div><div class=log> </div>";
const $walks = " b b bD%c%lD l";
const $enabled__script = _script("__tests__/template.marko_0_enabled", ($scope) => _on($scope["#button/2"], "click", $scope.enabled && (() => {
	$log($scope, `${$scope.log}(${$scope.other})`);
})));
const $enabled = /* @__PURE__ */ _let("enabled/6", ($scope) => {
	_text($scope["#text/3"], $scope.enabled);
	$enabled__script($scope);
});
const $other = /* @__PURE__ */ _let("other/7", ($scope) => _text($scope["#text/4"], $scope.other));
const $log = /* @__PURE__ */ _let("log/8", ($scope) => _text($scope["#text/5"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$enabled($scope, !$scope.enabled);
	});
	_on($scope["#button/1"], "click", function() {
		$other($scope, $scope.other + 1);
	});
});
function $setup($scope) {
	$enabled($scope, true);
	$other($scope, 0);
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
