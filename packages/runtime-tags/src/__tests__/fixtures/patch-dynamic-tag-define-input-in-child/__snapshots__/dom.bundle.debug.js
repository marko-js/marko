// tags/picker.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $Other_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0].record?.name);
const $Other_content = _content_resume("__tests__/tags/picker.marko_2*content", "<h5> </h5>", "D ", 0, $Other_content__$params);
const $Card_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0].record?.name);
const $Card_content = _content_resume("__tests__/tags/picker.marko_1*content", "<h4> </h4>", "D ", 0, $Card_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_useA__OR__input_record__OR__Card__OR__Other = /*@__PURE__*/ _or_patch("__tests__/tags/picker.marko_0_input_useA#3_input_record#4_Card#5_Other#6/setup", 7, ($scope) => $dynamicTag($scope, $scope.input_useA ? $scope.Card : $scope.Other, ($_) => ({ record: $scope.input_record })), 3);
const $Card = /*@__PURE__*/ _const("Card", $input_useA__OR__input_record__OR__Card__OR__Other);
const $Other = /*@__PURE__*/ _const("Other", $input_useA__OR__input_record__OR__Card__OR__Other);
function $setup$1($scope) {
	$Card($scope, { content: $Card_content($scope) });
	$Other($scope, { content: $Other_content($scope) });
}
const $input_useA$1 = /*@__PURE__*/ _const("input_useA", $input_useA__OR__input_record__OR__Card__OR__Other);
const $input_record$1 = /*@__PURE__*/ _const("input_record", $input_useA__OR__input_record__OR__Card__OR__Other);
const $input$1 = ($scope, input) => {
	$input_useA$1($scope, input.useA);
	$input_record$1($scope, input.record);
};
var picker_default = /*@__PURE__*/ _template("__tests__/tags/picker.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_useA = ($scope, input_useA) => $input_useA$1($scope["#childScope/0"], input_useA);
const $input_record = ($scope, input_record) => $input_record$1($scope["#childScope/0"], input_record);
const $input = ($scope, input) => {
	$input_useA($scope, input.useA);
	$input_record($scope, input.record);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
