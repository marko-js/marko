// template.marko
const $template = "<button class=up>up</button><button class=down>down</button><button class=change> </button>";
const $walks = " b b D l";
const $x = /* @__PURE__ */ _let("x/4", ($scope) => _text($scope["#text/3"], $scope.x));
const $direction = /* @__PURE__ */ _let("direction/5");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$direction($scope, "up");
	});
	_on($scope["#button/1"], "click", function() {
		$direction($scope, "down");
	});
	_on($scope["#button/2"], "click", function() {
		if ($scope.direction === "up") $x($scope, $scope.x + 1);
		else if ($scope.direction === "down") $x($scope, $scope.x - 1);
	});
});
function $setup($scope) {
	$x($scope, 1);
	$direction($scope, undefined);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
