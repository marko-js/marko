// template.marko
const $template = "<button>inc</button><div> </div>";
const $walks = " bD l";
const $sum = ($scope, sum) => _text($scope["#text/1"], sum);
const $y__OR__z = ($scope) => {
	$sum($scope, $scope.count + 1 + ($scope.count + 2));
};
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/2", ($scope) => {
	$y__OR__z($scope);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
