// template.marko
const $template = "before<!>after<!><!>";
const $walks = "b%c%c";
_enable_catch();
const $await_content3__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content3__$params = ($scope, $params5) => $await_content3__v($scope, $params5[0]);
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3_content", "CAUGHT:<!>", "b%b", 0, $catch_content__$params);
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "LOADING", "b");
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " b");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", " ", " b");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("first", 1));
	$try_content__await_promise2($scope, rejectAfter(new Error("boom"), 3));
};
const $try = /*@__PURE__*/ _try("#text/0", "a <!> b <!> c", "b%c%c", $try_content__setup);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", " ", " b");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
function $setup($scope) {
	$await_content3($scope);
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
	$await_promise($scope, resolveAfter("outer", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
