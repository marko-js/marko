// template.marko
const $template = "<!><!><button class=toggle>toggle</button><button class=add>add</button>";
const $walks = "b%b b b";
const $if_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $for_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1), 5);
const $for_content__setup = $for_content__show;
const $show = /*@__PURE__*/ _let("show/3", $for_content__show);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/4", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$show($scope, !$scope.show);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, [...$scope.items, "c"]);
	});
});
function $setup($scope) {
	$show($scope, true);
	$items($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
