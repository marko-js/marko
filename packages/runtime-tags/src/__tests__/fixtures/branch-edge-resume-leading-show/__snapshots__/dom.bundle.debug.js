// template.marko
const $template = "<div class=host><!><span class=sib>sib</span></div><button class=show>Show</button><button class=outer>Outer</button>";
const $walks = "D%l b b";
const $if_content__show = /*@__PURE__*/ _show("#text/1", "#text/0");
const $if_content__shown = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__show($scope, $scope._.shown));
const $if_content__setup = $if_content__shown;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><b>hi</b><!><span class=tail>tail</span>", "b%c%", $if_content__setup);
const $outer = /*@__PURE__*/ _let("outer/3", ($scope) => $if($scope, $scope.outer ? 0 : 1));
const $shown = /*@__PURE__*/ _let("shown/4", $if_content__shown);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$shown($scope, !$scope.shown);
	});
	_on($scope["#button/2"], "click", function() {
		$outer($scope, !$scope.outer);
	});
});
function $setup($scope) {
	$outer($scope, true);
	$shown($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
