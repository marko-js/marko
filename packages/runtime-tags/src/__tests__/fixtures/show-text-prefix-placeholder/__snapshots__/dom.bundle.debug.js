// template.marko
const $template = "<strong>+ <!></strong><span><!> dmg</span><em>+ <!><!><!></em><b>+ <!></b><button>inc</button>";
const $walks = "Db%lD%lDb%b%b%lDb%l b";
const $count = /* @__PURE__ */ _let("count/7", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	_text($scope["#text/1"], $scope.count);
	_text($scope["#text/3"], $scope.count);
	_text($scope["#text/5"], $scope.count);
});
const $show = /* @__PURE__ */ _show("#text/4", "#text/2");
const $vis = /* @__PURE__ */ _let("vis/8", ($scope) => $show($scope, $scope.vis));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/6"], "click", function() {
	$count($scope, $scope.count + 5);
	$vis($scope, !$scope.vis);
}));
function $setup($scope) {
	$count($scope, 3);
	$vis($scope, true);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
