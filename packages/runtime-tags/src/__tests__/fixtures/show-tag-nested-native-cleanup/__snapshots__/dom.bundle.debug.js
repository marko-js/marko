// template.marko
const $template = "<div id=ref>initial</div><!><button id=toggle>Toggle</button>";
const $walks = "b%b b";
const $show_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mounted";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "Destroyed";
	}
}));
const $show_content__setup = $show_content__setup__script;
const $show2 = /*@__PURE__*/ _show_branch("#text/0", "<section><p>content</p></section>", "b", $show_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $show2($scope, $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
