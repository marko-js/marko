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
const $await_content2__inner = ($scope, inner) => $input_name($scope["#childScope/0"], inner);
const $await_content2__setup = ($scope) => {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $await_content2__$params = ($scope, $params4) => $await_content2__inner($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content2__setup);
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $await_content__item_inner = /*@__PURE__*/ _closure_get("item_inner/5", ($scope) => $await_content__await_promise($scope, $scope._.item_inner), 0, "__tests__/template.marko_2_item_inner#1:4/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__item_inner($scope);
	$await_content2($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $for_content__setup = $await_content;
const $for_content__item_outer = $for_content__await_promise;
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_outer($scope, $params2[0]?.outer);
	$for_content__item_inner($scope, $params2[0]?.inner);
};
const $for_content__item_inner__closure = /*@__PURE__*/ _closure($await_content__item_inner);
const $for_content__item_inner = /*@__PURE__*/ _const("item_inner", $for_content__item_inner__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "key"]);
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
