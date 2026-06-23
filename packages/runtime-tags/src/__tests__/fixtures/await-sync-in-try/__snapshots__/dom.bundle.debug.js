// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "Loading...", "b");
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content__err = ($scope, err) => $catch_content__err_message($scope, err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2_content", "Error: <!>", "b%b", 0, $catch_content__$params);
const $await_content = /* @__PURE__ */ _await_content("#text/0", "Got: <!>", "b%b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__input_value = /* @__PURE__ */ _closure_get("input_value", ($scope) => $try_content__await_promise($scope, $scope._.input_value));
const $try_content__setup = ($scope) => {
	$try_content__input_value($scope);
	$await_content($scope);
};
const $try = /* @__PURE__ */ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, {
		catch: attrTag({ content: $catch_content($scope) }),
		placeholder: attrTag({ content: $placeholder_content($scope) })
	});
}
const $input = ($scope, input) => $input_value($scope, input.value);
const $input_value__closure = /* @__PURE__ */ _closure($try_content__input_value);
const $input_value = /* @__PURE__ */ _const("input_value", $input_value__closure);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
