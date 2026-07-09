// template.marko
const $template = "<div id=ref></div><!><button id=bump>bump</button><button id=toggle>Toggle</button>";
const $walks = "b%b b b";
const $show_content__label__script = _script("__tests__/template.marko_1_label", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = `Mount ${$scope._.label}`;
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = `Update ${$scope._.label}`;
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = `Destroy ${$scope._.label}`;
	}
}));
const $show_content__label = /*@__PURE__*/ _show_closure("#text/0", $show_content__label__script);
const $show_content__setup = $show_content__label;
const $show2 = /*@__PURE__*/ _show_branch("#text/0", 0, 0, $show_content__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => $show2($scope, $scope.show));
const $label = /*@__PURE__*/ _let("label/4", $show_content__label);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$label($scope, $scope.label + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$show($scope, true);
	$label($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
