// template.marko
const $template = "<button id=toggle>toggle</button><!><button id=inc>count <!></button><!><!>";
const $walks = " b%b Db%l%c";
const $show = /* @__PURE__ */ _show("#text/4", "#text/1");
const $visible__script = _script("__tests__/template.marko_0_visible", ($scope) => _on($scope["#button/0"], "click", function() {
	$visible($scope, !$scope.visible);
}));
const $visible = /* @__PURE__ */ _let("visible/5", ($scope) => {
	$show($scope, $scope.visible);
	$visible__script($scope);
});
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/6", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$visible($scope, false);
	$count($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
