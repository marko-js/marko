// template.marko
const $template = "<pre id=log></pre><!><button class=toggle> </button>";
const $walks = "b%b D l";
const $await_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content2__$params = ($scope, $params4) => $await_content2__x($scope, $params4[0]);
const $placeholder_content2 = _content("__tests__/template.marko_7*content", "inner loading");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content3__setup = ($scope) => {
	$await_content2($scope);
	$try_content3__await_promise($scope, rejectAfter(new Error("nope"), 2));
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", "caught <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $try_content2__show__script = _script("__tests__/template.marko_3_show#0:3", ($scope) => document.getElementById("log").textContent += "[" + $scope._._._.show + "]");
const $try_content2__show = /*@__PURE__*/ _closure_get("show/4", $try_content2__show__script, ($scope) => $scope._._._, "__tests__/template.marko_3_show#0:3/subscribe");
const $try_content2__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content2);
const $try_content2__setup = ($scope) => {
	$try_content2__show($scope);
	$try_content2__try($scope);
};
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
const $await_content__setup = ($scope) => $await_content__try($scope);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(1, 1));
};
const $show__closure = /*@__PURE__*/ _closure($try_content2__show);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	_text($scope["#text/2"], $scope.show);
	$show__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
