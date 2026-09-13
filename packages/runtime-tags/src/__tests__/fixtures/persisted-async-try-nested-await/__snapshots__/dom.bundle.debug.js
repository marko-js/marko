// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $catch_content2 = _content_resume("__tests__/template.marko_4*content", "<em>inner</em>");
const $catch_content = _content_resume("__tests__/template.marko_3*content", "<em>outer</em>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content2__await_promise($scope, $scope._._.input_promise), ($scope) => $scope._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_promise($scope);
	$await_content($scope);
};
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup);
const $try_content__setup = ($scope) => $try_content__try($scope, { catch: attrTag({ content: $catch_content2($scope) }) });
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content2__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
