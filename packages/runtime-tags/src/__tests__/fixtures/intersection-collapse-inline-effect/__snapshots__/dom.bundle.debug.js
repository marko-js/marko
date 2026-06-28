// template.marko
const $template = "<button>inc</button>";
const $walks = " b";
const $y__OR__z__script = _script("__tests__/template.marko_0_y_z", ($scope) => document.body.dataset.sum = `${$scope.count + 1 + ($scope.count + 2)}`);
const $y__OR__z = $y__OR__z__script;
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/1", ($scope) => {
	$y__OR__z($scope);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
