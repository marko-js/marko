// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content2__y = ($scope, y) => _text($scope["#text/0"], y);
const $await_content2__$params = ($scope, $params3) => $await_content2__y($scope, $params3[0]);
const $placeholder_content = _content("__tests__/tags/show-await.marko_3*content", "<i>inner loading</i>");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__input_inner = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_2_input_inner#0:5/init", /*@__PURE__*/ _closure_get("input_inner/7", ($scope) => $try_content__await_promise($scope, $scope._._.input_inner), ($scope) => $scope._._, "__tests__/tags/show-await.marko_2_input_inner#0:5/subscribe"));
const $try_content__setup = ($scope) => {
	$try_content__input_inner($scope);
	$await_content2($scope);
};
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe"));
const $await_content__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content__try($scope);
};
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p><!><!>", "D%c%l%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_inner$1($scope, input.inner);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_inner__closure = /*@__PURE__*/ _closure($try_content__input_inner);
const $input_inner$1 = /*@__PURE__*/ _const("input_inner", $input_inner__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

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
	$setup$1($scope["#childScope/2"]);
	$p($scope, Promise.resolve(0));
	$resolve($scope, undefined);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/2"], input_label);
const $input_inner = ($scope, input_inner) => $input_inner$1($scope["#childScope/2"], input_inner);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_inner($scope, input.inner);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
