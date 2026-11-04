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
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params4) => $await_content__v($scope, $params4[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__row_promise = /*@__PURE__*/ _closure_get("row_promise/8", ($scope) => $try_content__await_promise($scope, $scope._.row_promise), 0, "__tests__/template.marko_4_row_promise#1:4/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__row_promise($scope);
	$await_content($scope);
};
const $catch_content__heading = /*@__PURE__*/ _closure_get("heading/6", ($scope) => $input_heading($scope["#childScope/0"], $scope._._.heading), ($scope) => $scope._._);
const $catch_content__setup = ($scope) => {
	$catch_content__heading($scope);
	$input_uid($scope["#childScope/0"]);
};
const $catch_content__error_message = ($scope, error_message) => $input_name($scope["#childScope/0"], error_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__error_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $catch_content__setup, $catch_content__$params);
const $placeholder_content__heading = /*@__PURE__*/ _closure_get("heading/6", ($scope) => $input_heading($scope["#childScope/0"], $scope._._.heading), ($scope) => $scope._._);
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__heading($scope);
	$input_name($scope["#childScope/0"], $scope._["#LoopKey"]);
	$input_uid($scope["#childScope/0"]);
};
const $placeholder_content = _content("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $placeholder_content__setup);
const $for_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content, $catch_content);
const $for_content__setup = $for_content__try;
const $for_content__$params = ($scope, $params2) => $for_content__row_promise($scope, $params2[0]?.promise);
const $for_content__row_promise__closure = /*@__PURE__*/ _closure($try_content__row_promise);
const $for_content__row_promise = /*@__PURE__*/ _const("row_promise", $for_content__row_promise__closure);
const $heading = /*@__PURE__*/ _const("heading", ($scope) => _attr($scope["#h1/0"], "id", $scope.heading));
function $setup($scope) {
	$heading($scope, _id($scope));
}
const $for = /*@__PURE__*/ _for_of("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "key"]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
