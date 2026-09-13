// child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_name__OR__input_item__script = _script("__tests__/child.marko_0_input_name#3_input_item#4", ($scope) => document.querySelector("." + $scope.input_name).dataset.item = JSON.stringify($scope.input_item));
const $input_name__OR__input_item = /*@__PURE__*/ _or(5, $input_name__OR__input_item__script);
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	$input_name__OR__input_item($scope);
	_attr_class($scope["#div/0"], $scope.input_name);
});
const $input_item = /*@__PURE__*/ _const("input_item", $input_name__OR__input_item);
const $input$1 = ($scope, input) => {
	$input_name($scope, input.name);
	$input_item($scope, input.item);
};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<!></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&%l`)(" b", " b");
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "loading");
const $await_content__item = /*@__PURE__*/ _closure_get("item", ($scope) => $input_item($scope["#childScope/1"], $scope._._.item), ($scope) => $scope._._, "__tests__/template.marko_2_item#7/pending");
const $await_content__setup = ($scope) => {
	$await_content__item($scope);
	$input_name($scope["#childScope/1"], "c");
};
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `<span> </span>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)(" b"), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise", ($scope) => $try_content__await_promise($scope, $scope._.input_promise));
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $item__closure = /*@__PURE__*/ _closure($await_content__item);
const $item = /*@__PURE__*/ _const("item", ($scope) => {
	$input_item($scope["#childScope/0"], $scope.item);
	$input_item($scope["#childScope/1"], $scope.item);
	$item__closure($scope);
});
const $input_label = ($scope, input_label) => $item($scope, { label: input_label });
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$input_name($scope["#childScope/0"], "a");
	$input_name($scope["#childScope/1"], "b");
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_promise($scope, input.promise);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
