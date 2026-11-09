// template.marko
const $template = "<!><!><button>t</button>";
const $walks = "b%b b";
const $if_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"].length);
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1), 4);
const $for_content__setup = $for_content__show;
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items, "name"]));
const $show = /*@__PURE__*/ _let("show/3", $for_content__show);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$items($scope, [{ name: "ab" }, { name: "cde" }]);
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
