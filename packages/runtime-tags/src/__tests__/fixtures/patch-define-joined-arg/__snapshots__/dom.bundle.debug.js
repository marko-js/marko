// template.marko
const $Card_content__walks = " b";
const $Card_content__template = "<a>x</a>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $setup = ($_) => {};
const $Card_content__href = ($scope, href) => _attr($scope["#a/0"], "href", href);
const $Card_content__$params = ($scope, $params2) => $Card_content__$temp($scope, $params2[0]);
const $Card_content__$temp = ($scope, $temp) => $Card_content__href($scope, $temp.href);
const $input_q__OR__input_item = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "input_item", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_q", /*@__PURE__*/ _or(5, ($scope) => $Card_content__href($scope["#childScope/0"], $scope.input_q + $scope.input_item))));
const $input_q = /*@__PURE__*/ _const("input_q", $input_q__OR__input_item);
const $input_item = /*@__PURE__*/ _const("input_item", $input_q__OR__input_item);
const $input = ($scope, input) => {
	$input_q($scope, input.q);
	$input_item($scope, input.item);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
