// template.marko
const $template = "<button>Before</button><div> </div>";
const $walks = " bD l";
const $liveCount = /*@__PURE__*/ _let("liveCount/2", ($scope) => _text($scope["#text/1"], $scope.liveCount));
const $count = /*@__PURE__*/ _let_change("count/3");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function(_, el) {
	el.textContent = "" + $count($scope, 1);
}));
function $setup($scope) {
	$liveCount($scope, 0);
	$count($scope, 0, $valueChange($scope));
	$setup__script($scope);
}
function $valueChange($scope) {
	return function(v) {
		$liveCount($scope, v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
