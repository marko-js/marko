// template.marko
const $template = "<div id=refa></div><!><button id=toggle>Toggle</button>";
const $walks = "b%b b";
const $for_content__item__script = _script("__tests__/template.marko_2_item", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById(`ref${$scope.item}`).textContent = `${$scope.item} mount`;
	},
	onDestroy: function() {
		document.getElementById(`ref${$scope.item}`).textContent = `${$scope.item} destroy`;
	}
}));
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__item__script);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $show_content__for = /*@__PURE__*/ _for_of("#text/0", 0, 0, 0, $for_content__$params);
const $show_content__items = /*@__PURE__*/ _show_closure("#text/0", ($scope) => $show_content__for($scope, [$scope._.items]));
const $show_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	;
});
const $show_content__setup = ($scope) => {
	$show_content__items._($scope);
	$show_content__setup__script($scope);
};
const $show2 = /*@__PURE__*/ _show_branch("#text/0", "<!><!><!>", "b%c", $show_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $show2($scope, $scope.show));
const $items = /*@__PURE__*/ _let("items/3");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$items($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
