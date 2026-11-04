// template.marko
const $template = "<!---->";
const $walks = " b";
const $setup = ($_) => {};
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => _text($scope["#comment/0"], $scope.input_title));
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
