// template.marko
const $template = "<button>inc</button><div> </div>";
const $walks = " bD l";
const $count__OR__half = ($scope) => _text($scope["#text/1"], $scope.count + ($scope.count + .5).toFixed(1) + ($scope.count + .5).constructor.name);
const $count = /*@__PURE__*/ _let("count/2", $count__OR__half);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
