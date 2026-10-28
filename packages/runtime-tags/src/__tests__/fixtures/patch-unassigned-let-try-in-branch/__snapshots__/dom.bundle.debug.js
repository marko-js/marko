// tags/label.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_onHide = ($scope, input_onHide) => _text($scope["#text/0"], typeof input_onHide);
const $input$1 = ($scope, input) => $input_onHide($scope, input.onHide);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D l");
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_3*content", "<p>loading</p>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_promise = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_promise", /*@__PURE__*/ _closure_get("input_promise/7", ($scope) => $try_content__await_promise($scope, $scope._._.input_promise), ($scope) => $scope._._, "__tests__/template.marko_2_input_promise#0:5/subscribe"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_promise($scope);
	$await_content($scope);
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1)));
const $input_show = $show;
function $setup($scope) {
	$input_onHide($scope["#childScope/0"], function() {
		$show($scope, false);
	});
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
};
const $input_promise__closure = /*@__PURE__*/ _closure($try_content__input_promise);
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_promise", $input_promise__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
