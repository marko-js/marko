// template.marko
const $template = "<div><button> </button><!----></div>";
const $walks = "D D l l";
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_text($scope["#comment/2"], `${_to_text($scope.count)} + ${_to_text($scope.count)} = ${_to_text($scope.count + $scope.count)}`);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
