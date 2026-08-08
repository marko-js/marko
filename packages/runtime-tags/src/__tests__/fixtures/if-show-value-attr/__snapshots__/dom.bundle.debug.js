// template.marko
const $template = "<button>b</button><!><!><span>shown</span><!><!>";
const $walks = " b%b%c%c";
const $if = /*@__PURE__*/ _if("#text/1", "<div>zero</div>", 0, 0, "<div>one</div>", 0, 0, "<div>two</div>");
const $show = /*@__PURE__*/ _show("#text/3", "#text/2");
const $n = /*@__PURE__*/ _let("n/4", ($scope) => {
	$if($scope, $scope.n % 3 === 0 ? 0 : $scope.n % 3 === 1 ? 1 : 2);
	$show($scope, $scope.n > 0);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
