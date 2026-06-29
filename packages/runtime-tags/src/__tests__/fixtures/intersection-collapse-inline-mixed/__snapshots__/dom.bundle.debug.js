// template.marko
const $template = "<button>inc</button><div><!> | <!></div>";
const $walks = " bD%c%l";
const $shared = /* @__PURE__ */ _const("shared", ($scope) => _text($scope["#text/1"], $scope.shared));
const $shared__OR__once = ($scope) => {
	_text($scope["#text/2"], $scope.shared + $scope.count * 3);
};
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	$shared($scope, $scope.count * 2);
	$shared__OR__once($scope);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
