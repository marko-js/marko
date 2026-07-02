// template.marko
const $template = "<button>inc</button><div> </div>";
const $walks = " bD l";
const $sum = ($scope, sum) => _text($scope["#text/1"], sum);
const $y__OR__z = ($scope) => {
	$sum($scope, $scope.count + 1 + ($scope.count + 2));
};
const $count = /* @__PURE__ */ _let("count/2", $y__OR__z);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
