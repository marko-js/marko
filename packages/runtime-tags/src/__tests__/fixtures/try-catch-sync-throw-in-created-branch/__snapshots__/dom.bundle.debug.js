// template.marko
const $template = "<button>show</button><!><!><!><!><!>";
const $walks = " b%b%b%b%c";
const $catch_content7__err_message = ($scope, err_message) => _text($scope["#text/0"], (() => {
	throw new Error(`catch of ${err_message}`);
})());
const $catch_content7__$params = ($scope, $params7) => $catch_content7__err_message($scope, $params7[0]?.message);
const $catch_content7 = _content("__tests__/template.marko_18*content", " ", " ", 0, $catch_content7__$params);
const $try_content7__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("try body");
})());
const $if_content4__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content7__setup, 0, $catch_content7);
const $if_content4__setup = $if_content4__try;
const $catch_content6__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content6__$params = ($scope, $params6) => $catch_content6__err_message($scope, $params6[0]?.message);
const $catch_content6 = _content("__tests__/template.marko_15*content", "outer caught <!>", "b%", 0, $catch_content6__$params);
const $catch_content5__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("catch");
})());
const $catch_content5 = _content("__tests__/template.marko_14*content", " ", " ", $catch_content5__setup);
const $try_content6__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("try body");
})());
const $if_content3__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content6__setup, 0, $catch_content5);
const $if_content3__setup = $if_content3__try;
const $catch_content4__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content4__$params = ($scope, $params5) => $catch_content4__err_message($scope, $params5[0]?.message);
const $catch_content4 = _content("__tests__/template.marko_11*content", "outer caught <!>", "b%", 0, $catch_content4__$params);
const $catch_content3__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content3__$params = ($scope, $params4) => $catch_content3__err_message($scope, $params4[0]?.message);
const $catch_content3 = _content("__tests__/template.marko_10*content", "caught <!>", "b%", 0, $catch_content3__$params);
const $try_content5__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("try body");
})());
const $if_content2__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content5__setup, 0, $catch_content3);
const $if_content2__setup = $if_content2__try;
const $catch_content2__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content("__tests__/template.marko_7*content", "outer caught <!>", "b%", 0, $catch_content2__$params);
const $if_content__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new Error("if body");
})());
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_5*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content4__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content4__setup);
const $try_content4__show = /*@__PURE__*/ _closure_get("show/6", ($scope) => $try_content4__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_4_show#0:5/subscribe");
const $try_content4__setup = $try_content4__show;
const $try_content3__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content3__setup);
const $try_content3__show = /*@__PURE__*/ _closure_get("show/6", ($scope) => $try_content3__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_3_show#0:5/subscribe");
const $try_content3__setup = $try_content3__show;
const $try_content2__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content2__setup);
const $try_content2__show = /*@__PURE__*/ _closure_get("show/6", ($scope) => $try_content2__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_2_show#0:5/subscribe");
const $try_content2__setup = $try_content2__show;
const $try_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get("show/6", ($scope) => $try_content__if($scope, $scope._.show ? 0 : 1), 0, "__tests__/template.marko_1_show#0:5/subscribe");
const $try_content__setup = $try_content__show;
const $show__closure = /*@__PURE__*/ _closure($try_content__show, $try_content2__show, $try_content3__show, $try_content4__show);
const $show = /*@__PURE__*/ _let("show/5", $show__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $try2 = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content2);
const $try3 = /*@__PURE__*/ _try("#text/3", "<!><!><!>", "b%", $try_content3__setup, 0, $catch_content4);
const $try4 = /*@__PURE__*/ _try("#text/4", "<!><!><!>", "b%", $try_content4__setup, 0, $catch_content6);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$try($scope);
	$try2($scope);
	$try3($scope);
	$try4($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
