// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$1 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<h1>Fields</h1><!><!>";
const $walks = " b%c";
const $for_content__heading = /*@__PURE__*/ _closure_get("heading/7", ($scope) => $input_heading($scope["#childScope/0"], $scope._._._.heading), ($scope) => $scope._._._);
const $for_content__setup = ($scope) => {
	$for_content__heading($scope);
	$input_name($scope["#childScope/0"], $scope["#LoopKey"]);
	$input_uid($scope["#childScope/0"]);
};
const $await_content__for = /*@__PURE__*/ _for_of("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup);
const $await_content__items = ($scope, items) => $await_content__for($scope, [items, "key"]);
const $await_content__$params = ($scope, $params3) => $await_content__items($scope, $params3[0]);
const $catch_content__heading = /*@__PURE__*/ _closure_get("heading/7", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $catch_content__setup = ($scope) => {
	$catch_content__heading($scope);
	$input_uid($scope["#childScope/0"]);
};
const $catch_content__error_message = ($scope, error_message) => $input_name($scope["#childScope/0"], error_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__error_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $catch_content__setup, $catch_content__$params);
const $placeholder_content__heading = /*@__PURE__*/ _closure_get("heading/7", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__heading($scope);
	$input_name($scope["#childScope/0"], "loading");
	$input_uid($scope["#childScope/0"]);
};
const $placeholder_content = _content("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:4/init", /*@__PURE__*/ _closure_get("input_promise/6", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/template.marko_1_input_promise#0:4/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$try_content__heading($scope);
	$input_name($scope["#childScope/0"], "before");
	$input_uid($scope["#childScope/0"]);
	$await_content($scope);
};
const $try_content__heading = /*@__PURE__*/ _closure_get("heading/7", ($scope) => $input_heading($scope["#childScope/0"], $scope._.heading));
const $heading = /*@__PURE__*/ _const("heading", ($scope) => _attr($scope["#h1/0"], "id", $scope.heading));
const $try = /*@__PURE__*/ _try("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1), $try_content__setup, $placeholder_content, $catch_content);
function $setup($scope) {
	$heading($scope, _id($scope));
	$try($scope);
}
const $input = ($scope, input) => $input_promise($scope, input.promise);
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
