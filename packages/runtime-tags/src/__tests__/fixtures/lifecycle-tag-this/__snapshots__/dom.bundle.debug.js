// template.marko
const $template = "<div id=ref></div><button id=increment>Increment</button>";
const $walks = "b b";
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _lifecycle($scope, {
	onMount: function() {
		this.onUpdate();
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = `x=${"x" in $scope ? $scope.x : 0}, was=${this.cur}`;
		this.cur = "x" in $scope ? $scope.x : 0;
	}
}));
const $x = /*@__PURE__*/ _let("x/1", $x__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, ("x" in $scope ? $scope.x : 0) + 1);
}));
function $setup($scope) {
	$x($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b b", $setup);
