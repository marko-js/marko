// template.marko
const $template = "<button>inc</button>";
const $walks = " b";
const $y__OR__z__script = _script("__tests__/template.marko_0_y_z", ($scope) => document.body.dataset.sum = `${$scope.count + 1 + ($scope.count + 2)}`);
const $y__OR__z = $y__OR__z__script;
const $count = /* @__PURE__ */ _let("count/1", $y__OR__z);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
