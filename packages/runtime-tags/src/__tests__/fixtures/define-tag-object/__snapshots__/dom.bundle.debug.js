// template.marko
const $template = "<div> </div><button> </button>";
const $walks = "D l D l";
const $myObj = ($scope, myObj) => _text($scope["#text/0"], JSON.stringify(myObj));
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	_text($scope["#text/2"], $scope.x);
	$myObj($scope, {
		foo: 1,
		bar: $scope.x + 1
	});
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
