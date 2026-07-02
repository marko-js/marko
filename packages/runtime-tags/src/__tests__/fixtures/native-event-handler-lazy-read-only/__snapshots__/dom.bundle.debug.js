// template.marko
const $template = "<button class=inc>inc</button><button class=show>show</button><div class=log> </div>";
const $walks = " b bD l";
const $count = /* @__PURE__ */ _let("count/3");
const $log = /* @__PURE__ */ _let("log/4", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$count($scope, $scope.count + 1);
	});
	_on($scope["#button/1"], "click", function() {
		$log($scope, `${$scope.log}[${$scope.count}]`);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
