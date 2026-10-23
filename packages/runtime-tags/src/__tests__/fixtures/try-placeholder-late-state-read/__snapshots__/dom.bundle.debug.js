// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $await_content2__clicks = /*@__PURE__*/ _closure_get("clicks/4", ($scope) => _text($scope["#text/0"], $scope._._._.clicks), ($scope) => $scope._._._, "__tests__/template.marko_4_clicks#0:3/subscribe");
const $await_content2__setup = $await_content2__clicks;
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<b>loaded <!></b>", "Db%", $await_content2__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("done", 2));
};
const $placeholder_content__clicks = /*@__PURE__*/ _closure_get("clicks/4", ($scope) => _text($scope["#text/0"], $scope._._.clicks), ($scope) => $scope._._, "__tests__/template.marko_2_clicks#0:3/subscribe");
const $placeholder_content__setup = $placeholder_content__clicks;
const $placeholder_content = _content("__tests__/template.marko_2*content", "<i>loading <!></i>", "Db%", $placeholder_content__setup);
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $clicks__closure = /*@__PURE__*/ _closure($placeholder_content__clicks, $await_content2__clicks);
const $clicks = /*@__PURE__*/ _let("clicks/3", ($scope) => {
	_text($scope["#text/1"], $scope.clicks);
	$clicks__closure($scope);
});
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/2");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope, +$scope.clicks + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$clicks($scope, 0);
	$await_promise($scope, resolveAfter("first", 1));
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
