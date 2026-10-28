// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_promise = ($scope, input_promise) => $input_promise$1($scope["#childScope/0"], input_promise);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_promise($scope, input.promise);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/wrap.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__x__script = _script("__tests__/tags/wrap.marko_3_x#1:1", ($scope) => console.log("catch", $scope._.x));
const $catch_content__x = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_3_x#1:1/init", _closure_resume("__tests__/tags/wrap.marko_3_x#1:1/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/tags/wrap.marko_fill0", "x", /*@__PURE__*/ _closure_get("x/7", $catch_content__x__script), 0)));
const $catch_content__setup = $catch_content__x;
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/tags/wrap.marko_3*content", "<b> </b>", "D ", $catch_content__setup, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_2_input_promise#0:4/init", /*@__PURE__*/ _closure_get("input_promise/6", ($scope) => $try_content__await_promise($scope, $scope._._.input_promise), ($scope) => $scope._._, "__tests__/tags/wrap.marko_2_input_promise#0:4/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $Card_content__x__closure = /*@__PURE__*/ _closure($catch_content__x);
const $Card_content__x = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "x", $Card_content__x__closure);
const $Card_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_label#0:3/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => $Card_content__x($scope, $scope._.input_label + "!"), 0, "__tests__/tags/wrap.marko_1_input_label#0:3/subscribe"));
const $Card_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $Card_content__setup = ($scope) => {
	$Card_content__input_label($scope);
	$Card_content__try($scope);
};
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Card_content__setup($scope["#childScope/0"]);
}
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($Card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);
