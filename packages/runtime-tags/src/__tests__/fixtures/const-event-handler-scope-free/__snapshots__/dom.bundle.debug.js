// template.marko
const $template = "<a href=#x>link</a><button id=mark>mark</button><button id=inc> </button><p id=t>unmarked</p>";
const $walks = " b b D lb";
const $n = /*@__PURE__*/ _let("n/4", ($scope) => _text($scope["#text/3"], $scope.n));
const $stop2__script = _script("__tests__/template.marko_0_stop#5", ($scope) => _on($scope["#a/0"], "click", $scope.stop ||= $stop));
const $stop2 = /*@__PURE__*/ _const("stop", $stop2__script);
const $mark2__script = _script("__tests__/template.marko_0_mark#6", ($scope) => _on($scope["#button/1"], "click", $scope.mark ||= $mark));
const $mark2 = /*@__PURE__*/ _const("mark", $mark2__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$stop2($scope, $stop);
	$mark2($scope, $mark);
	$setup__script($scope);
}
function $stop(e) {
	e.preventDefault();
}
function $mark() {
	document.querySelector("#t").textContent = "marked";
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
