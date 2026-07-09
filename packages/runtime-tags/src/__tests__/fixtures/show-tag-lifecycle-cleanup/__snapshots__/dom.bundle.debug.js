// template.marko
const $template = "<div id=ref></div><!><button id=toggle>Toggle</button>";
const $walks = "b%b b";
const $show_content__mounts__OR__count__script = _script("__tests__/template.marko_1_mounts_count", ($scope) => _lifecycle($scope, {
	onMount: function() {
		$mounts($scope._, $scope._.mounts + 1);
		document.getElementById("ref").textContent = `Mount ${$scope._.mounts} (count ${$scope.count})`;
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = `Destroy (count ${$scope.count})`;
	}
}));
const $show_content__mounts__OR__count = /*@__PURE__*/ _or(3, $show_content__mounts__OR__count__script);
const $show_content__mounts = /*@__PURE__*/ _if_closure("#text/0", 0, $show_content__mounts__OR__count);
const $show_content__count = /*@__PURE__*/ _let("count/2", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$show_content__mounts__OR__count($scope);
});
const $show_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$show_content__count($scope, $scope.count + 1);
}));
const $show_content__setup = ($scope) => {
	$show_content__mounts._($scope);
	$show_content__count($scope, 0);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch("#text/0", "<button id=inc>count <!></button>", " Db%l", $show_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $show2($scope, $scope.show));
const $mounts = /*@__PURE__*/ _let("mounts/3", $show_content__mounts);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$mounts($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
