// template.marko
const $template = "<div id=a></div><div id=b></div><button id=both>both</button>";
const $walks = " b b b";
const $if_content2__count = /*@__PURE__*/ _if_closure("#div/1", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content2__setup = $if_content2__count;
const $if_content__count = /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $if = /*@__PURE__*/ _if("#div/0", "<span>a:<!></span>", "Db%l", $if_content__setup);
const $if2 = /*@__PURE__*/ _if("#div/1", "<span>b:<!></span>", "Db%l", $if_content2__setup);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$if2($scope, !$scope.show ? 0 : 1);
});
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	$if_content__count($scope);
	$if_content2__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, !$scope.show);
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$show($scope, true);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
