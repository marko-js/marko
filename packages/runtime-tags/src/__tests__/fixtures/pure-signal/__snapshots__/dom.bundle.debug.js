// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $double = ($scope, double) => _text($scope["#text/1"], double);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$double($scope, $scope.count * 2);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
