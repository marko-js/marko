// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/tags/show-await.marko_fill1", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/show-await.marko_2_input_label#0:5/subscribe"), 0));
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content__item($scope);
};
const $await_content__item = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_2_item#1:2/init", /*@__PURE__*/ _closure_get("item/8", ($scope) => _text($scope["#text/0"], $scope._.item), 0, "__tests__/tags/show-await.marko_2_item#1:2/subscribe"));
const $await_content__x = ($scope, x) => _text($scope["#text/2"], x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!><!>:<!></p>", "D%b%c%", $await_content__setup);
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_promise#0:4/init", /*@__PURE__*/ _fill_signal("input_promise __tests__/tags/show-await.marko_fill0", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__await_promise($scope, $scope._.input_promise))));
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item__closure = /*@__PURE__*/ _closure($await_content__item);
const $for_content__item = /*@__PURE__*/ _const("item", $for_content__item__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_items$1 = ($scope, input_items) => $for($scope, [input_items]);
const $input$1 = ($scope, input) => {
	$input_items$1($scope, input.items);
	$input_promise($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/tags/show-await.marko_fill0", "input_promise", $for_content__input_promise);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/show-await.marko_fill1", "input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&b`)("b%c");
const $p = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "p/7", ($scope) => $input_promise($scope["#childScope/2"], $scope.p));
const $resolve = /*@__PURE__*/ _let("resolve/8", ($scope) => _attr($scope["#button/1"], "disabled", !$scope.resolve));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$p($scope, new Promise((r) => {
			$resolve($scope, r);
		}));
	});
	_on($scope["#button/1"], "click", function() {
		$scope.resolve(42);
	});
});
function $setup($scope) {
	$resolve($scope, undefined);
	$setup__script($scope);
	$p($scope, Promise.resolve(0));
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/2"], input_label);
const $input_items = ($scope, input_items) => $input_items$1($scope["#childScope/2"], input_items);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
