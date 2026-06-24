// template.marko
const $template = "<div><!><!><button>Toggle</button></div>";
const $walks = "D%b%b l";
const $if_content2__setup = ($scope) => _text($scope["#text/0"], $scope.$global.x);
const $if_content__setup = ($scope) => _text($scope["#text/0"], $scope.$global.x);
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D l", $if_content__setup);
const $if2 = /*@__PURE__*/ _if("#text/1", "<span class=hidden> </span>", "D l", $if_content2__setup);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$if2($scope, !$scope.show ? 0 : 1);
	$show__script($scope);
});
function $setup($scope) {
	$show($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
