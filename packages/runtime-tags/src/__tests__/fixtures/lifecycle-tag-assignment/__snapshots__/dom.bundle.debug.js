// template.marko
const $template = "<div>x=<span> </span>, was=<!></div><button id=increment>Increment</button>";
const $walks = "DbD lb%l b";
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _lifecycle($scope, {
	onMount: function() {
		this.cur = $scope.x;
	},
	onUpdate: function() {
		$prev($scope, this.cur);
		this.cur = $scope.x;
	}
}));
const $x = /* @__PURE__ */ _let("x/3", ($scope) => {
	_text($scope["#text/0"], $scope.x);
	$x__script($scope);
});
const $prev = /* @__PURE__ */ _let("prev/4", ($scope) => _text($scope["#text/1"], $scope.prev));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$x($scope, $scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 0);
	$prev($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
