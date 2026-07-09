// template.marko
const $template = "<div id=ref></div><section></section><button id=toggle>Toggle</button>";
const $walks = "b b b";
const $show_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mount";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "Destroy";
	}
}));
const $show_content__setup = $show_content__setup__script;
const $show2 = /*@__PURE__*/ _show_branch("#section/0", "<p>only child</p>", "b", $show_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $show2($scope, $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
