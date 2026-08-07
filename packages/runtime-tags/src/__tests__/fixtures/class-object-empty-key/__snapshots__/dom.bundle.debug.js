// template.marko
const $template = "<div>x</div><button>b</button>";
const $walks = " b b";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _attr_class($scope["#div/0"], {
	"": $scope.count % 2,
	odd: $scope.count % 2
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
