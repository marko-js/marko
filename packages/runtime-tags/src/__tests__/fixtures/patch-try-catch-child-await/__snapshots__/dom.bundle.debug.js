// tags/loader.marko
const $template$1 = "<div class=ld><!></div>";
const $walks$1 = "D%l";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise$1 = $await_promise;
const $input$1 = ($scope, input) => $input_promise$1($scope, input.promise);
var loader_default = /*@__PURE__*/ _template("__tests__/tags/loader.marko", $template$1, "D%l", $setup$1, $input$1);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<b> </b>", "D ", 0, $catch_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$setup$1($scope["#childScope/0"]);
};
const $try = /*@__PURE__*/ _try("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
