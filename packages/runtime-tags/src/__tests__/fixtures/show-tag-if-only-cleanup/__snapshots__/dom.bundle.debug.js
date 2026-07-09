// template.marko
const $template = "<div id=ref></div><!><button id=inner>Inner</button><button id=toggle>Toggle</button>";
const $walks = "b%b b b";
const $if_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "mount";
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "destroy";
	}
}));
const $if_content__setup = $if_content__setup__script;
const $show_content__if = /*@__PURE__*/ _if("#text/0", 0, 0, $if_content__setup);
const $show_content__inner = /*@__PURE__*/ _show_closure("#text/0", ($scope) => $show_content__if($scope, $scope._.inner ? 0 : 1));
const $show_content__setup = $show_content__inner;
const $show2 = /*@__PURE__*/ _show_branch("#text/0", "<!><!><!>", "b%c", $show_content__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $show2($scope, $scope.show));
const $inner = /*@__PURE__*/ _let("inner/4", $show_content__inner);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$inner($scope, !$scope.inner);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$show($scope, true);
	$inner($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
