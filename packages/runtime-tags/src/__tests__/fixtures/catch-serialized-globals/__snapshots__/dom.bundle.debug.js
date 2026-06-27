// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_enable_catch();
const $await_content__data = ($scope, data) => _text($scope["#text/0"], data);
const $await_content__$params = ($scope, $params3) => $await_content__data($scope, $params3[0]);
const $catch_content__error_message__OR__message__OR__clicked = /* @__PURE__ */ _or(7, ($scope) => _text($scope["#text/1"], $scope.clicked ? $scope.message : $scope.error_message), 2);
const $catch_content__message = /* @__PURE__ */ _const("message", $catch_content__error_message__OR__message__OR__clicked);
const $catch_content__clicked = /* @__PURE__ */ _let("clicked/6", $catch_content__error_message__OR__message__OR__clicked);
const $catch_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content__clicked($scope, true);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__message($scope, $scope.$global.settings.message);
	$catch_content__clicked($scope, false);
	$catch_content__setup__script($scope);
};
const $catch_content__error_message = /* @__PURE__ */ _const("error_message", $catch_content__error_message__OR__message__OR__clicked);
const $catch_content__$params = ($scope, $params2) => $catch_content__error_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2_content", "<button> </button>", " D l", $catch_content__setup, $catch_content__$params);
const $await_content = /* @__PURE__ */ _await_content("#text/0", " ", " b");
const $try_content__await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $try = /* @__PURE__ */ _try("#text/0", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
