// template.marko
const $template = "<div> <button>Toggle</button></div>";
const $walks = "D b l";
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /*@__PURE__*/ _let("show/2", ($scope) => {
	_text($scope["#text/0"], $scope.show ? "Hello!" : "");
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, true);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
