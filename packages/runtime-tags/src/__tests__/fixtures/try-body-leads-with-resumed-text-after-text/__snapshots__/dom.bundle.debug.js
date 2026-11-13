// template.marko
const $template = "<p>x<!></p><button>inc</button>";
const $walks = "Db%l b";
const $catch_content = _content_resume("__tests__/template.marko_2*content", "oops");
const $try_content__n = /*@__PURE__*/ _closure_get("n/3", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:2/subscribe");
const $try_content__setup = $try_content__n;
const $n__closure = /*@__PURE__*/ _closure($try_content__n);
const $n = /*@__PURE__*/ _let("n/2", $n__closure);
const $try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
