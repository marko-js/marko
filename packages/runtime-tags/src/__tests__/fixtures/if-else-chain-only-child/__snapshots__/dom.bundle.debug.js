// template.marko
const $template = "<button> </button><div></div>";
const $walks = " D l b";
const $if = /*@__PURE__*/ _if("#div/2", "<p>a</p>", 0, 0, "<i>b</i>", 0, 0, "<b>c</b>");
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if($scope, $scope.count % 3 === 0 ? 0 : $scope.count % 3 === 1 ? 1 : 2);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
