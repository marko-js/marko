// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $data = /* @__PURE__ */ _let("data/2", ($scope) => _text($scope["#text/1"], $scope.data));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$data($scope, 1);
}));
function $setup($scope) {
	$data($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
