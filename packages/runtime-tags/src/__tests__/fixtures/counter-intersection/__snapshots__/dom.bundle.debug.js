// template.marko
const $template = "<div><button class=a> </button> + <button class=b> </button> = <!></div>";
const $walks = "D D lb D lb%l";
const $a__OR__b = /* @__PURE__ */ _or(7, ($scope) => _text($scope["#text/4"], $scope.a + $scope.b));
const $a = /* @__PURE__ */ _let("a/5", ($scope) => {
	_text($scope["#text/1"], $scope.a);
	$a__OR__b($scope);
});
const $b = /* @__PURE__ */ _let("b/6", ($scope) => {
	_text($scope["#text/3"], $scope.b);
	$a__OR__b($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$a($scope, 10);
	});
	_on($scope["#button/2"], "click", function() {
		$b($scope, 5);
	});
});
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
