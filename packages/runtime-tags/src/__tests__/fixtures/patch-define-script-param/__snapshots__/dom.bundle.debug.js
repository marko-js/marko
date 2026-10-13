// template.marko
const $Box_content__walks = " b";
const $Box_content__template = "<div>box</div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content__walks);
const $setup = () => {};
const $Box_content__label__script = _script("__tests__/template.marko_1_label#3", ($scope) => _el_read($scope["#div/0"]).dataset.x = $scope.label);
const $Box_content__label = /*@__PURE__*/ _const("label", $Box_content__label__script);
const $Box_content__$params = ($scope, $params2) => $Box_content__$temp($scope, $params2[0]);
const $Box_content__$temp = ($scope, $temp) => $Box_content__label($scope, $temp.label);
const $input_label = ($scope, input_label) => $Box_content__label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
