// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/0"], input_x);
const $input_y = ($scope, input_y) => $input_y$1($scope["#childScope/0"], input_y);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/view.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__a__OR__c = /*@__PURE__*/ _or_resume("__tests__/tags/view.marko_1_a#2_c#4/init", 5, ($scope) => _text($scope["#text/0"], $scope.a + $scope.c));
const $if_content__a = /*@__PURE__*/ _fill_let("__tests__/tags/view.marko_fill2", "a/2", $if_content__a__OR__c);
const $if_content__input_x = /*@__PURE__*/ _init_resume("__tests__/tags/view.marko_1_input_x#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/view.marko_fill0", "input_x", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__a($scope, $scope._.input_x))));
const $if_content__setup__script = _script("__tests__/tags/view.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__a($scope, +$scope.a + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_x._($scope);
	$if_content__input_y._($scope);
	$if_content__setup__script($scope);
};
const $if_content__c = /*@__PURE__*/ _const("c", $if_content__a__OR__c);
const $if_content__b = _let("b/3", ($scope) => $if_content__c($scope, $scope.b * 2));
const $if_content__input_y = /*@__PURE__*/ _init_resume("__tests__/tags/view.marko_1_input_y#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/view.marko_fill1", "input_y", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__b($scope, $scope._.input_y))));
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span><button>+</button>", "D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
const $input_x = /*@__PURE__*/ _fill_const("__tests__/tags/view.marko_fill0", "input_x", $if_content__input_x);
const $input_y = /*@__PURE__*/ _fill_const("__tests__/tags/view.marko_fill1", "input_y", $if_content__input_y);
var view_default = /*@__PURE__*/ _template("__tests__/tags/view.marko", $template, "b%c", 0, $input);
