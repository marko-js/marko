// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $await_content__label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_label#2:4/init", /*@__PURE__*/ _closure_get("label/9", ($scope) => _text($scope["#text/0"], $scope._.label), 0, "__tests__/template.marko_3_label#2:4/subscribe"));
const $await_content__setup = $await_content__label;
const $await_content__x = ($scope, x) => _text($scope["#text/1"], x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $Show_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Show_content__setup = $await_content;
const $Show_content__p = $Show_content__await_promise;
const $Show_content__tag_input_label__closure = /*@__PURE__*/ _closure($await_content__label);
const $Show_content__tag_input_label = /*@__PURE__*/ _const("label", $Show_content__tag_input_label__closure);
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => {
	$Show_content__p($scope, $temp.p);
	$Show_content__tag_input_label($scope, $temp.label);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Show_content__tag_input_label($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__n._($scope);
	$Show_content__setup($scope["#childScope/0"]);
};
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_n#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Show_content__p($scope["#childScope/0"], Promise.resolve($scope._.n))));
const $n = _let("n/6", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
