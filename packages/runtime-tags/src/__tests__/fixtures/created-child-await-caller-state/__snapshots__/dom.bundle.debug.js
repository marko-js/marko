// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup$1 = $await_content;
const $input_promise = $await_promise;
const $input$1 = ($scope, input) => $input_promise($scope, input.promise);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button class=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $if_content__input_p = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise($scope["#childScope/1"], $scope._.input_p));
const $if_content__setup = ($scope) => {
	$if_content__input_p._($scope);
	$if_content__n._($scope);
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
};
const $if_content__n = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_promise($scope["#childScope/0"], Promise.resolve($scope._.n)));
const $n = /*@__PURE__*/ _let("n/6", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n ? 0 : 1);
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", "b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_p($scope, input.p);
};
const $input_p = /*@__PURE__*/ _const("input_p", $if_content__input_p);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
