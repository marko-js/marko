// template.marko
const $template = "<div> </div><button> </button>";
const $walks = "D l D l";
const $myObj = ($scope, myObj) => _text($scope["#text/0"], JSON.stringify(myObj));
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	_text($scope["#text/2"], $scope.x);
	$myObj($scope, {
		foo: 1,
		bar: $scope.x + 1
	});
	$x__script($scope);
});
function $setup($scope) {
	$x($scope, 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
