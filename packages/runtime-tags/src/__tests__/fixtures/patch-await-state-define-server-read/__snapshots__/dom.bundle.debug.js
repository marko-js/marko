// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!>:<!></em>";
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $await_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Row_content__setup($scope["#childScope/0"]);
};
const $await_content__x = ($scope, x) => $Row_content__r_v($scope["#childScope/0"], x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $Row_content__input_label = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe"), 0);
const $Row_content__setup = $Row_content__input_label;
const $Row_content__r_v = ($scope, r_v) => _text($scope["#text/1"], r_v);
const $Row_content__$params = ($scope, $params2) => $Row_content__r($scope, $params2[0]);
const $Row_content__r = ($scope, r) => $Row_content__r_v($scope, r.v);
const $await_content = _resumed["__tests__/template.marko_0_#text#1/init"] = /*@__PURE__*/ _await_content("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $n = /*@__PURE__*/ _let("n/5", ($scope) => $await_promise($scope, Promise.resolve($scope.n)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$await_content($scope);
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Row_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
