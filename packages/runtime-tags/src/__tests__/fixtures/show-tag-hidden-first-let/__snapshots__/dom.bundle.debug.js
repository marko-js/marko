// template.marko
const $template = "<div id=ref>initial</div><!><button id=toggle>Toggle</button>";
const $walks = "b%b b";
const $show_content__count__script = _script("__tests__/template.marko_1_count", ($scope) => {
	document.getElementById("ref").textContent = `count ${$scope.count}`;
	$signal($scope, 0).onabort = () => {
		document.getElementById("ref").textContent = "closed";
	};
});
const $show_content__count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$signalReset($scope, 0);
	_text($scope["#text/1"], $scope.count);
	$show_content__count__script($scope);
});
const $show_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$show_content__count($scope, $scope.count + 1);
}));
const $show_content__setup = ($scope) => {
	$show_content__count($scope, 0);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch("#text/0", "<button id=inc>count <!></button>", " Db%l", $show_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $show2($scope, $scope.show));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
