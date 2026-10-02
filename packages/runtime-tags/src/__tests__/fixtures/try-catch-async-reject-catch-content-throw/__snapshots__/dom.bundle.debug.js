// template.marko
const $template = "<!><!><button class=toggle> </button>";
const $walks = "b%b D l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params4) => $await_content__value($scope, $params4[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(new Error("nope"), 1));
};
const $catch_content2__err_message__OR__n = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/1"], $scope.n ? (() => {
	throw new Error("from catch");
})() : $scope.err_message));
const $catch_content2__n = /*@__PURE__*/ _let("n/5", $catch_content2__err_message__OR__n);
const $catch_content2__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content2__n($scope, +$scope.n + 1);
}));
const $catch_content2__setup = ($scope) => {
	$catch_content2__n($scope, 0);
	$catch_content2__setup__script($scope);
};
const $catch_content2__err_message = /*@__PURE__*/ _const("err_message", $catch_content2__err_message__OR__n);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content("__tests__/template.marko_4*content", "<button> </button>", " D ", $catch_content2__setup, $catch_content2__$params);
const $catch_content__outer_message = ($scope, outer_message) => _text($scope["#text/0"], outer_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__outer_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<p>outer caught <!></p>", "Db%", 0, $catch_content__$params);
const $try_content2__if = /*@__PURE__*/ _if("#text/0", "<span>before</span><!><!>", "b%", $if_content__setup);
const $try_content2__show = /*@__PURE__*/ _closure_get("show/4", ($scope) => $try_content2__if($scope, $scope._._.show ? 0 : 1), ($scope) => $scope._._, "__tests__/template.marko_2_show#0:3/subscribe");
const $try_content2__setup = $try_content2__show;
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content2);
const $try_content__setup = ($scope) => $try_content__try($scope);
const $show__closure = /*@__PURE__*/ _closure($try_content2__show);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	_text($scope["#text/2"], $scope.show);
	$show__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
