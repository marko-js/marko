// tags/rows.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $await_content__item_id = /*@__PURE__*/ _closure_get("item_id", ($scope) => _text($scope["#text/0"], $scope._.item_id));
const $await_content__setup = $await_content__item_id;
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em><!>:<!></em>", "D%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__input_promise = /*@__PURE__*/ _fill_join("__tests__/tags/rows.marko0", "input_promise", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__await_promise($scope, $scope._.input_promise)));
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $for_content__item_id__closure = /*@__PURE__*/ _closure($await_content__item_id);
const $for_content__item_id = /*@__PURE__*/ _const("item_id", $for_content__item_id__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<div><!></div>", "D%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items, "id"]);
const $input$1 = ($scope, input) => {
	$input_items($scope, input.items);
	$input_promise$1($scope, input.promise);
};
const $input_promise$1 = /*@__PURE__*/ _fill_const("__tests__/tags/rows.marko0", "input_promise", $for_content__input_promise);
var rows_default = /*@__PURE__*/ _template("__tests__/tags/rows.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>drop</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $items = /*@__PURE__*/ _let("items/5", ($scope) => $input_items($scope["#childScope/1"], $scope.items));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, $scope.items.slice(1));
}));
function $setup($scope) {
	$items($scope, [{ id: 1 }, { id: 2 }]);
	$setup__script($scope);
}
const $input_promise = ($scope, input_promise) => $input_promise$1($scope["#childScope/1"], input_promise);
const $input = ($scope, input) => $input_promise($scope, input.promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
