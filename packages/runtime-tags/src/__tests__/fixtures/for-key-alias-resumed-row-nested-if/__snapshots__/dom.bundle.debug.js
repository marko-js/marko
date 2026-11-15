// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $if_content2__setup = ($scope) => _text($scope["#text/0"], $scope._._["#LoopKey"]);
const $if_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content2__setup);
const $if_content__item = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.item ? 0 : 1));
const $if_content__setup = $if_content__item;
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $for_content__show = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.show ? 0 : 1), 3);
const $for_content__setup = $for_content__show;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item");
const $show = /*@__PURE__*/ _let("show/2", $for_content__show);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$for($scope, [["a", "b"]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
