// template.marko
const $template = "<button class=toggle>toggle</button><button class=bump>bump</button><button class=a>a</button><button class=b>b</button><div class=state><!>:<!></div><div class=log> </div>";
const $walks = " b b b bD%c%lD l";
const $enabled__script = _script("__tests__/template.marko_0_enabled", ($scope) => {
	_attrs_script($scope, "#button/2");
	_attrs_script($scope, "#button/3");
});
const $enabled = /* @__PURE__ */ _let("enabled/7", ($scope) => {
	_attrs_partial($scope, "#button/2", { onClick: $scope.enabled && $anonymous($scope) }, { class: 1 });
	_attrs_partial($scope, "#button/3", $scope.enabled && { onClick: $onClick($scope) }, { class: 1 });
	_text($scope["#text/4"], $scope.enabled);
	$enabled__script($scope);
});
const $count = /* @__PURE__ */ _let("count/8", ($scope) => _text($scope["#text/5"], $scope.count));
const $log = /* @__PURE__ */ _let("log/9", ($scope) => _text($scope["#text/6"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$enabled($scope, !$scope.enabled);
	});
	_on($scope["#button/1"], "click", function() {
		$count($scope, $scope.count + 1);
	});
});
function $setup($scope) {
	$enabled($scope, true);
	$count($scope, 0);
	$log($scope, "");
	$setup__script($scope);
}
function $onClick($scope) {
	return function() {
		$log($scope, `${$scope.log}b(${$scope.count})`);
	};
}
function $anonymous($scope) {
	return () => {
		$log($scope, `${$scope.log}a(${$scope.count})`);
	};
}
_resume("__tests__/template.marko_0/onClick", $onClick);
_resume("__tests__/template.marko_0/anonymous", $anonymous);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
