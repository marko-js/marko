// template.marko
const $template = "<!><!><button>fail</button>";
const $walks = "b%b b";
function fail() {
	throw new Error("fail");
}
const $catch_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $catch_content = _content_resume("__tests__/template.marko_3*content", " ", " ", $catch_content__setup);
const $try_content__failing__OR__item = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._._.failing ? fail() : $scope._.item));
const $try_content__failing = /*@__PURE__*/ _closure_get("failing/3", $try_content__failing__OR__item, ($scope) => $scope._._, "__tests__/template.marko_2_failing#0:2/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__failing($scope);
	$try_content__item($scope);
};
const $try_content__item = /*@__PURE__*/ _closure_get("item/4", $try_content__failing__OR__item);
const $for_content__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content__setup, 0, $catch_content);
const $for_content__setup = $for_content__try;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = /*@__PURE__*/ _const("item");
const $failing__closure = /*@__PURE__*/ _closure($try_content__failing);
const $failing = /*@__PURE__*/ _let("failing/2", $failing__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$failing($scope, true);
}));
function $setup($scope) {
	$failing($scope, false);
	$for($scope, [["a", "b"]]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
