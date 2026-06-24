// template.marko
const $template = "= <!><button>Inc</button>";
const $walks = "b%b b";
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
