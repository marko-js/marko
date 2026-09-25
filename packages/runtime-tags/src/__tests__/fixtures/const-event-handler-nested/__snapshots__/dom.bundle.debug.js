// template.marko
const $template = "<!><!><!><button class=toggle>toggle</button><p> </p>";
const $walks = "b%b%b bD l";
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	($scope._.add ||= $add($scope._))($scope.n);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__n = /*@__PURE__*/ _const("n", ($scope) => _text($scope["#text/1"], $scope.n));
const $for_content__$params = ($scope, $params2) => $for_content__n($scope, $params2[0]);
const $if_content__inc__script = _script("__tests__/template.marko_1_inc#6", ($scope) => _on($scope["#button/0"], "click", $scope._.inc ||= $inc($scope._)));
const $if_content__inc = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__inc__script);
const $if_content__setup = $if_content__inc;
const $count = /*@__PURE__*/ _let("count/4", ($scope) => _text($scope["#text/3"], $scope.count));
const $if = /*@__PURE__*/ _if("#text/1", "<button class=inc>inc</button>", " ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $inc2 = /*@__PURE__*/ _const("inc");
const $add2 = /*@__PURE__*/ _const("add");
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button class=add>+<!></button>", " Db%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$count($scope, 0);
	$show($scope, true);
	$inc2($scope, $inc($scope));
	$add2($scope, $add($scope));
	$for($scope, [[1, 2]]);
	$setup__script($scope);
}
const $inc = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
const $add = ($scope) => function(n) {
	$count($scope, $scope.count + n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
