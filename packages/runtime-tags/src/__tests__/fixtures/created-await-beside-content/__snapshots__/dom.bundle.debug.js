// template.marko
const $template = "<h1>An await beside kept content</h1><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe");
const $outer_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $outer_content__setup);
const $if_content__input_promise = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
	$input_label($scope, input.label);
};
const $input_promise = /*@__PURE__*/ _const("input_promise", $if_content__input_promise);
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D%l", 0, $input$1);

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&%c`)("D%l");
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $c = /*@__PURE__*/ _let("c/7", ($scope) => $input_content$1($scope["#childScope/1"], $scope.c));
const $input_content = $c;
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<span> </span>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content__$params);
const $p = /*@__PURE__*/ _let("p/8", ($scope) => $await_promise($scope, $scope.p));
const $input_promise = $p;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$p($scope, 0);
}));
function $setup($scope) {
	$await_content($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_promise($scope, input.promise);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
