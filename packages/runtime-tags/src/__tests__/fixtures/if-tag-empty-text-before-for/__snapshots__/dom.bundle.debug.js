// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $if_content__for = /*@__PURE__*/ _for_of("#text/0", "<b> </b>", "D ", $for_content__setup);
const $if_content__setup = ($scope) => $if_content__for($scope, [[{ id: 1 }, { id: 2 }], "id"]);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup, "none");
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
