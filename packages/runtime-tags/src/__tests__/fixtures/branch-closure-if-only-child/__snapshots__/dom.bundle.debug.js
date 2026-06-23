// template.marko
const $template = "<button> </button><div> </div>";
const $walks = " D l D l";
const $count__script = _script$1("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/4", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_text($scope["#text/3"], true ? `${_to_text($scope.count)}` : "");
	$count__script($scope);
});
const $setup__script = _script$1("__tests__/template.marko_0", ($scope) => _on($scope["#div/2"], "click", function() {}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template$1("__tests__/template.marko", $template, $walks, $setup);
