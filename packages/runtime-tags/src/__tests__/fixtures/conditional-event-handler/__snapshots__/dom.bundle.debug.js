// template.marko
const $template = "<button>Clicked <!> times</button>";
const $walks = " Db%l";
const $clicks__script = _script("__tests__/template.marko_0_clicks", ($scope) => _on($scope["#button/0"], "click", $scope.clicks < 3 && (() => $clicks($scope, $scope.clicks + 1) - 1)));
const $clicks = /*@__PURE__*/ _let("clicks/2", ($scope) => {
	_text($scope["#text/1"], $scope.clicks);
	$clicks__script($scope);
});
function $setup($scope) {
	$clicks($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
