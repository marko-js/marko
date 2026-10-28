// tags/child.marko
const $template$1 = "<div><!><button id=c>c</button></div>";
const $walks$1 = "D%b l";
const $if_content__c__OR__l = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill3", "l", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.l + "#" + $scope._.c)));
const $if_content__l = /*@__PURE__*/ _const("l", $if_content__c__OR__l);
const $if_content__input_label__OR__input_other = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1", "input_other", /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill0", "input_label", /*@__PURE__*/ _or(1, ($scope) => $if_content__l($scope, $scope._.input_label + $scope._.input_other + "!")), "#text/0", 0), "#text/0", 0);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_label#0:5/init", /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__input_other));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__input_other._($scope);
	$if_content__c._($scope);
};
const $if_content__input_other = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_other#0:6/init", /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__input_other));
const $if_content__c = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_c#0:7/init", /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__c__OR__l));
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill2", "c/7", $if_content__c);
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$c($scope, +$scope.c + 1);
}));
function $setup$1($scope) {
	$c($scope, 0);
	$setup__script$1($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_label($scope, input.label);
	$input_other($scope, input.other);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_label", $if_content__input_label);
const $input_other = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill1", "input_other", $if_content__input_other);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button id=p>p</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)($walks$1);
const $n = /*@__PURE__*/ _let("n/5", ($scope) => {
	$input_label($scope["#childScope/0"], $scope.n ? "X" : "Y");
	$input_other($scope["#childScope/0"], $scope.n ? "A" : "B");
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
