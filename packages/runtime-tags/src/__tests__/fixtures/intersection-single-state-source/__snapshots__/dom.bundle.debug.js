// template.marko
const $template = "<button>increment</button><div>-- <!> -- <!> -- <!> -- <!></div>";
const $walks = " bDb%c%c%c%l";
const $doubled = /* @__PURE__ */ _const("doubled", ($scope) => _text($scope["#text/2"], $scope.doubled));
const $tripled = /* @__PURE__ */ _const("tripled", ($scope) => _text($scope["#text/3"], $scope.tripled));
const $doubled__OR__tripled = ($scope) => {
	_text($scope["#text/4"], $scope.doubled + $scope.tripled);
};
const $count = /* @__PURE__ */ _let("count/5", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$doubled($scope, $scope.count * 2);
	$tripled($scope, $scope.count * 3);
	$doubled__OR__tripled($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
