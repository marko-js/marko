// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__err_message = /*@__PURE__*/ _closure_get("err_message", ($scope) => _text($scope["#text/0"], $scope._.err_message), 0, "__tests__/template.marko_5_err_message#3/subscribe");
const $await_content__setup = $await_content__err_message;
const $await_content__retry = ($scope, retry) => _text($scope["#text/1"], retry);
const $await_content__$params = ($scope, $params3) => $await_content__retry($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p>caught <!>, <!></p>", "Db%c%", $await_content__setup);
const $catch_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__await_promise($scope, resolveAfter("retried", 2));
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content__err_message__closure = /*@__PURE__*/ _closure($await_content__err_message);
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__err_message__closure);
const $catch_content = _content("__tests__/template.marko_4*content", "<!><!><!>", "b%", $catch_content__setup, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading...");
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup);
const $try_content__setup = ($scope) => $try_content__try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
