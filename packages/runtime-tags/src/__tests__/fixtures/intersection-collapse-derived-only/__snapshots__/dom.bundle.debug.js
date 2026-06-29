// template.marko
const $template = "<button>inc</button><div> </div>";
const $walks = " bD l";
const $doubled__OR__tripled = ($scope) => {
	_text($scope["#text/1"], $scope.count * 2 + $scope.count * 3);
};
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/2", ($scope) => {
	$doubled__OR__tripled($scope);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
