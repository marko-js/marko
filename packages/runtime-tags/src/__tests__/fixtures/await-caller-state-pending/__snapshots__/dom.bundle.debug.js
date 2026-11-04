// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $placeholder_content = _content("__tests__/tags/show-await.marko_3*content", "<p>waiting</p>");
const $await_content__input_label = /*@__PURE__*/ _closure_get("input_label/6", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe");
const $await_content__setup = $await_content__input_label;
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _closure_get("input_promise/5", ($scope) => $try_content__await_promise($scope, $scope._.input_promise), 0, "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup$1 = $try;
const $input$1 = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _const("input_promise", $input_promise__closure);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=open>pend</button><button class=settle>settle</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b b/${_w0}&b`)("b%c");
const $p = /*@__PURE__*/ _let("p/6", ($scope) => $input_promise($scope["#childScope/2"], $scope.p));
const $resolve = /*@__PURE__*/ _let("resolve/7", ($scope) => _attr($scope["#button/1"], "disabled", !$scope.resolve));
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
	$setup$1($scope["#childScope/2"]);
	$p($scope, Promise.resolve(0));
	$resolve($scope, undefined);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/2"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
