// template.marko
const $D_content__walks = "D l";
const $D_content__template = "<div> </div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks);
const $setup = () => {};
const $D_content__input_x = ($scope, input_x) => _text($scope["#text/0"], input_x);
const $D_content__$params = ($scope, $params2) => $D_content__input($scope, $params2[0]);
const $D_content__input = ($scope, input) => $D_content__input_x($scope, input.x);
const $input_x = ($scope, input_x) => $D_content__input_x($scope["#childScope/0"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
