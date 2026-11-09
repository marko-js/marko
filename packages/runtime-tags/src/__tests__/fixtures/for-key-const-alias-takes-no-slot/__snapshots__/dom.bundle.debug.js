// template.marko
const $template = "<!><!><button class=toggle></button>";
const $walks = "b%b b";
const $if_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $for_content__if = /*@__PURE__*/ _if("#text/2", " ", " ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1), 3);
const $for_content__count = /*@__PURE__*/ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $for_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__count($scope, +$scope.count + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__show._($scope);
	$for_content__count($scope, 0);
	$for_content__setup__script($scope);
};
const $show = /*@__PURE__*/ _let("show/2", $for_content__show);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button> </button><!><!>", " D l%", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$for($scope, [["a", "b"]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
