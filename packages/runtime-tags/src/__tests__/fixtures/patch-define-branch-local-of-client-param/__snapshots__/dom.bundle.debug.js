// template.marko
const $Row_content__walks = "b%c";
const $Row_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Row_content__walks);
const $if_content2__doubled = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.doubled));
const $if_content2__setup = $if_content2__doubled;
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe"), 0));
const $if_content__setup = ($scope) => {
	$if_content__input_label($scope);
	$if_content__n($scope);
	$if_content__value._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/1", "<span> </span>", "D ", $if_content2__setup);
const $if_content__n = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_n#0:6/init", /*@__PURE__*/ _closure_get("n/9", ($scope) => $if_content__if($scope, $scope._._.n > 1 ? 0 : 1), ($scope) => $scope._._, "__tests__/template.marko_2_n#0:6/subscribe"));
const $if_content__doubled = /*@__PURE__*/ _const("doubled", $if_content2__doubled);
const $if_content__value = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_value#1:3/init", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__doubled($scope, $scope._.value * 2)));
const $Row_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p><!><!>", "D l%", $if_content__setup);
const $Row_content__input_show = /*@__PURE__*/ _closure_get("input_show/7", ($scope) => $Row_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_1_input_show#0:4/subscribe");
const $Row_content__setup = $Row_content__input_show;
const $Row_content__tag_input_value = /*@__PURE__*/ _const("value", $if_content__value);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__tag_input_value($scope, $temp.value);
const $n__closure = /*@__PURE__*/ _closure($if_content__n);
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	$Row_content__tag_input_value($scope["#childScope/0"], $scope.n);
	$n__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_show__closure = /*@__PURE__*/ _closure($Row_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
