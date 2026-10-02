// template.marko
const $template = "<!><!><button class=toggle> </button>";
const $walks = "b%b D l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $if_content__setup = ($scope) => {
	$await_content($scope);
	$if_content__await_promise($scope, rejectAfter(new Error("nope"), 1));
};
const $catch_content__n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $catch_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content__n($scope, +$scope.n + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__n($scope, 0);
	$catch_content__setup__script($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/1"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "<button><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__$params);
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<span>before</span><!><!>", "b%", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show/4", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#0:3/subscribe");
const $try_content__setup = $try_content__show;
const $show__closure = /*@__PURE__*/ _closure($try_content__show);
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
