// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content3__done = ($scope, done) => _text($scope["#text/0"], done);
const $await_content3__$params = ($scope, $params5) => $await_content3__done($scope, $params5[0]);
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params4) => $await_content2__b($scope, $params4[0]);
const $placeholder_content2 = _content("__tests__/template.marko_7*content", "inner loading");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content3__setup = ($scope) => {
	$await_content2($scope);
	$try_content3__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $await_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content3__setup, $placeholder_content2);
const $await_content__setup__script = _script("__tests__/template.marko_5", ($scope) => console.log("caught body effect"));
const $await_content__setup = ($scope) => {
	$await_content__try($scope);
	$await_content__setup__script($scope);
};
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params3) => $await_content__a($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><!><!>", "D l%", $await_content__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, resolveAfter("a", 1));
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
const $try_content__setup = ($scope) => $try_content__try($scope);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
function $setup($scope) {
	$await_content3($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("done", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
