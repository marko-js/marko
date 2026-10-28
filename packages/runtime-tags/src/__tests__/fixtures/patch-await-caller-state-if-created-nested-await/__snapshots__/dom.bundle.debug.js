// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content2__y = ($scope, y) => _text($scope["#text/0"], y);
const $await_content2__$params = ($scope, $params3) => $await_content2__y($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", "<em> </em>", "D ");
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
const $await_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/show-await.marko_1_input_label#0:4/init", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => {
	$await_content__await_promise($scope, Promise.resolve($scope._.input_label));
	_text($scope["#text/0"], $scope._.input_label);
}, 0, "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe"));
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content2($scope);
};
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p><!><!>", "D%c%l%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise = $await_promise;
const $input$1 = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_label$1($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__closure);
var show_await_default = /*@__PURE__*/ _template("__tests__/tags/show-await.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=open>pend</button><button class=settle>settle</button><!><!>";
const $walks = " b b%c";
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__p._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__p = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_p#0:7/init", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_promise($scope["#childScope/0"], $scope._.p)));
const $p = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "p/7", $if_content__p);
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
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
