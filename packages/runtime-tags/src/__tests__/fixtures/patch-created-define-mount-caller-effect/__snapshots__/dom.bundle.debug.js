// template.marko
const $Info_content__walks = "b";
const $Info_content__template = "<p>info</p>";
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!><!>`)($Info_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&%c`)($Info_content__walks);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:8/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $Info_content__label($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$scope["#childScope/0"]._ = $scope._;
	$Info_content__setup($scope["#childScope/0"]);
};
const $Info_content__input_page__OR__label__script = _script("__tests__/template.marko_1_input_page#0:6_label#2", ($scope) => console.log("info", $scope.label, $scope._.input_page));
const $Info_content__input_page__OR__label = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_page#0:6_label#2/init", 3, $Info_content__input_page__OR__label__script);
const $Info_content__input_page = /*@__PURE__*/ _closure_get("input_page/10", $Info_content__input_page__OR__label, 0, "__tests__/template.marko_1_input_page#0:6/subscribe");
const $Info_content__setup = $Info_content__input_page;
const $Info_content__label = /*@__PURE__*/ _const("label", $Info_content__input_page__OR__label);
const $Info_content__$params = ($scope, $params2) => $Info_content__$temp($scope, $params2[0]);
const $Info_content__$temp = ($scope, $temp) => $Info_content__label($scope, $temp.label);
const $count = _let("count/9", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$Info_content__label($scope["#childScope/2"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$scope["#childScope/2"]._ = $scope;
	$Info_content__setup($scope["#childScope/2"]);
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/3", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_page($scope, input.page);
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_page__closure = /*@__PURE__*/ _closure($Info_content__input_page);
const $input_page = /*@__PURE__*/ _const("input_page", $input_page__closure);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
