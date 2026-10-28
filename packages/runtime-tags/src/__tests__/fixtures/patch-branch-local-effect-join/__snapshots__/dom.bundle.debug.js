// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_y = ($scope, input_y) => $input_a($scope["#childScope/0"], input_y);
const $input_x = ($scope, input_x) => $input_b($scope["#childScope/0"], input_x);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_y($scope, input.y);
	$input_x($scope, input.x);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_a__OR__c = /*@__PURE__*/ _fill_signal("input_a __tests__/tags/child.marko_fill1/unpatched", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:5_c#2/init", 3, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.c)), _if_closure, "#text/0", 0);
const $if_content__c__script = _script("__tests__/tags/child.marko_1_c#2", ($scope) => _el_read($scope["#div/1"]).textContent = "s:" + $scope.c);
const $if_content__c = /*@__PURE__*/ _const("c", ($scope) => {
	$if_content__input_a__OR__c($scope);
	$if_content__c__script($scope);
});
const $if_content__input_b = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_b#0:4/init", /*@__PURE__*/ _fill_signal("input_b __tests__/tags/child.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__c($scope, $scope._.input_b + "!"))));
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__input_a._($scope);
};
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__c);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p><div></div>", "D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_b($scope, input.b);
	$input_a($scope, input.a);
};
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", $if_content__input_b);
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, "b%c", 0, $input);
