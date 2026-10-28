// tags/field.marko
const $template$2 = "<label> </label><input>";
const $walks$2 = " D l b";
const $setup$2 = ($_) => {};
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $input_uid = ($scope, input_uid) => $uid($scope, input_uid || _id($scope, "IdFallback:uid"));
const $input_name$1 = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input_heading = ($scope, input_heading) => _attr($scope["#input/2"], "aria-describedby", input_heading);
const $input$2 = ($scope, input) => {
	$input_uid($scope, input.uid);
	$input_name$1($scope, input.name);
	$input_heading($scope, input.heading);
};
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$2, $walks$2, 0, $input$2);

// tags/loaded.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$2);
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_name = ($scope, input_name) => $input_name$1($scope["#childScope/0"], input_name);
function $setup$1($scope) {
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_name($scope, input.name);
	$input_content($scope, input.content);
};
var loaded_default = /*@__PURE__*/ _template("__tests__/tags/loaded.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $placeholder_content__setup = ($scope) => {
	$input_name$1($scope["#childScope/0"], "loading");
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $placeholder_content = _content("__tests__/template.marko_5*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $placeholder_content__setup);
const $inputloadedLoadedsection_content__setup = ($scope) => {
	$input_name$1($scope["#childScope/0"], $scope._._._["#LoopKey"]);
	$input_uid($scope["#childScope/0"]);
	$input_heading($scope["#childScope/0"]);
};
const $inputloadedLoadedsection_content = _content("__tests__/template.marko_4*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $inputloadedLoadedsection_content__setup);
_content_resume($inputloadedLoadedsection_content);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputloadedLoadedsection_content);
const $await_content__input_loaded__OR__ready = /*@__PURE__*/ _or(3, ($scope) => $await_content__dynamicTag($scope, $scope._._._.input_loaded ? loaded_default : "section", ($_) => ({ name: $scope.ready })));
const $await_content__input_loaded = /*@__PURE__*/ _closure_get("input_loaded/5", $await_content__input_loaded__OR__ready, ($scope) => $scope._._._, "__tests__/template.marko_3_input_loaded#0:4/subscribe");
const $await_content__setup = $await_content__input_loaded;
const $await_content__ready = /*@__PURE__*/ _const("ready", $await_content__input_loaded__OR__ready);
const $await_content__$params = ($scope, $params3) => $await_content__ready($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__item_promise = /*@__PURE__*/ _closure_get("item_promise/6", ($scope) => $try_content__await_promise($scope, $scope._.item_promise), 0, "__tests__/template.marko_2_item_promise#1:3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__item_promise($scope);
	$await_content($scope);
};
const $for_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for_content__$params = ($scope, $params2) => $for_content__item_promise($scope, $params2[0]?.promise);
const $for_content__item_promise__closure = /*@__PURE__*/ _closure($try_content__item_promise);
const $for_content__item_promise = /*@__PURE__*/ _const("item_promise", $for_content__item_promise__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "key"]);
const $input = ($scope, input) => {
	$input_items($scope, input.items);
	$input_loaded($scope, input.loaded);
};
const $input_loaded__closure = /*@__PURE__*/ _closure($await_content__input_loaded);
const $input_loaded = /*@__PURE__*/ _const("input_loaded", $input_loaded__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
