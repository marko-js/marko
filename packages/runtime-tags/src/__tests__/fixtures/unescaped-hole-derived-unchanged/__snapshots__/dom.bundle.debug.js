// template.marko
const $template = "<div> </div><p> </p><button> </button>";
const $walks = "D lD l D l";
const $html = ($scope, html) => _html($scope, html, "#text/0");
const $n = /*@__PURE__*/ _let("n/4", ($scope) => {
	_html($scope, $scope.n > 0 ? "<i>big</i>" : "<b>small</b>", "#text/1");
	_text($scope["#text/3"], $scope.n);
	$html($scope, $scope.n > 0 ? "<i>big</i>" : "<b>small</b>");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
