// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $Row_content__fn__OR__label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "label", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_fn#3_label#4/init", 5, ($scope) => _text($scope["#text/0"], $scope.fn() + $scope.label)));
const $Row_content__fn = /*@__PURE__*/ _const("fn", $Row_content__fn__OR__label);
const $Row_content__label = /*@__PURE__*/ _const("label", $Row_content__fn__OR__label);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => {
	$Row_content__fn($scope, $temp.fn);
	$Row_content__label($scope, $temp.label);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Row_content__label($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_count#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Row_content__fn($scope["#childScope/0"], $fn($scope))));
const $count = /*@__PURE__*/ _let("count/6", $if_content__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
const $fn = ($scope) => () => $scope._.count;
_resumed["__tests__/template.marko_1/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
