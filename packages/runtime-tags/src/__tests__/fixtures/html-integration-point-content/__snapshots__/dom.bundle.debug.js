// template.marko
const $template = "<svg><foreignObject class=host width=100 height=100><!><!><!></foreignObject><foreignObject class=host>hidden: <!></foreignObject><desc class=host></desc></svg><math><mtext class=host></mtext></math><button class=edit>edit</button><button class=show>show</button>";
const $walks = "E%b%b%l Db%l lD l b b";
const $if = /*@__PURE__*/ _if("#text/0", "<input value=if>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $if2 = /*@__PURE__*/ _if("#text/4", "<input value=hidden>");
const $if3 = /*@__PURE__*/ _if("#desc/5", "<a>desc</a>");
const $if4 = /*@__PURE__*/ _if("#mtext/6", "<a>mtext</a>");
const $editing = /*@__PURE__*/ _let("editing/9", ($scope) => {
	_html($scope, $scope.editing ? "<input value=html>" : "", "#text/2");
	$if($scope, $scope.editing ? 0 : 1);
	$dynamicTag($scope, $scope.editing && "input", () => ({ value: "dynamic" }));
	$if2($scope, $scope.editing ? 0 : 1);
	$if3($scope, $scope.editing ? 0 : 1);
	$if4($scope, $scope.editing ? 0 : 1);
});
const $show = /*@__PURE__*/ _show("#foreignobject/3");
const $visible = /*@__PURE__*/ _let("visible/10", ($scope) => $show($scope, $scope.visible));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/7"], "click", function() {
		$editing($scope, !$scope.editing);
	});
	_on($scope["#button/8"], "click", function() {
		$visible($scope, !$scope.visible);
	});
});
function $setup($scope) {
	$editing($scope, false);
	$visible($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
