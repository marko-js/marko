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
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__value = ($scope, value) => $input_name($scope["#childScope/0"], value);
const $await_content__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $for_content__setup = ($scope) => {
	$input_name($scope["#childScope/0"], "before");
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
	$await_content($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $for_content__item_promise = $for_content__await_promise;
const $for_content__$params = ($scope, $params2) => $for_content__item_promise($scope, $params2[0]?.promise);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1), $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
