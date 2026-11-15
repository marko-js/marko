// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $catch_content = _content_resume("__tests__/template.marko_4*content", "caught");
const $if_content__setup = ($scope) => _text($scope["#text/0"], $scope._._["#LoopKey"]);
const $try_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show/3", ($scope) => $try_content__if($scope, $scope._._.show ? 0 : 1), ($scope) => $scope._._, "__tests__/template.marko_2_show#0:2/subscribe");
const $try_content__setup = $try_content__show;
const $for_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $for_content__setup = $for_content__try;
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
const $show = /*@__PURE__*/ _let("show/2", $show__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$for($scope, [["a", "b"]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
