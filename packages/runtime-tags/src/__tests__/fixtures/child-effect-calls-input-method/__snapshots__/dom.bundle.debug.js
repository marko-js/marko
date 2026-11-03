// tags/label.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = ($_) => {};
const $input__script = _script("__tests__/tags/label.marko_0_input#1", ($scope) => console.log("run", $scope.input.get()));
const $input$1 = /*@__PURE__*/ _const("input", $input__script);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input$1);

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $getTitle2 = ($scope, getTitle) => $input$1($scope["#childScope/0"], { get: getTitle });
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $getTitle2($scope, $getTitle($scope)));
const $input = ($scope, input) => $input_title($scope, input.title);
const $getTitle = ($scope) => () => $scope.input_title;
_resumed["__tests__/template.marko_0/getTitle"] = $getTitle;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
