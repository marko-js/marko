// template.marko
const $Foo_content__walks = "D l", $Foo_content__template = "<span> </span>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Foo_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Foo_content__walks);
const $setup = () => {};
const $Foo_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $Foo_content__$params = ($scope, $params2) => $Foo_content__a($scope, $params2[0]);
const $input_a = ($scope, input_a) => $Foo_content__a($scope["#childScope/0"], input_a);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
