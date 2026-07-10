// template.marko
const $template = "before<!>after";
const $walks = "b%c";
_enable_catch();
const $await_content3__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content3__$params = ($scope, $params6) => $await_content3__v($scope, $params6[0]);
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params5) => $await_content2__v($scope, $params5[0]);
const $catch_content2__e_message = ($scope, e_message) => _text($scope["#text/0"], e_message);
const $catch_content2__$params = ($scope, $params4) => $catch_content2__e_message($scope, $params4[0]?.message);
const $catch_content2 = _content_resume("__tests__/template.marko_5_content", "INNER:<!>", "b%b", 0, $catch_content2__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " b");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("inner-slow", 3));
};
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2_content", "CAUGHT:<!>", "b%b", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content2__setup);
const $await_content3 = /*@__PURE__*/ _await_content("#text/2", " ", " b");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/2", $await_content3__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content3($scope);
	$try_content__await_promise($scope, resolveAfter("slow", 2));
	$try_content__try($scope, { catch: attrTag({ content: $catch_content2($scope) }) });
	$try_content__await_promise2($scope, rejectAfter(new Error("boom"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "a <!> b <!> c <!> d", "b%c%c%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
