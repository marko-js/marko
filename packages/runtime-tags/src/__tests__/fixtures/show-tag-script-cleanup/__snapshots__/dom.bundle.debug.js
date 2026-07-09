// template.marko
const $template = "<div id=ref></div><!><button id=toggle>Toggle</button>";
const $walks = "b%b b";
const $show_content__id__script = _script("__tests__/template.marko_1_id", ($scope) => {
	{
		const el = document.getElementById("ref");
		el.textContent = `open ${$scope.id}`;
		$signal($scope, 0).onabort = () => {
			el.textContent = `close ${$scope.id}`;
		};
	}
});
const $show_content__id = /*@__PURE__*/ _let("id/1", ($scope) => {
	$signalReset($scope, 0);
	$show_content__id__script($scope);
});
const $show_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$show_content__id($scope, $scope.id + 1);
}));
const $show_content__setup = ($scope) => {
	$show_content__id($scope, 0);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch("#text/0", "<button id=next>next</button>", " b", $show_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $show2($scope, $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
