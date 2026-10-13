// tags/card/index.marko
const $template$1 = "<section><h2> </h2></section>";
const $walks$1 = "E m";
const $setup$1 = () => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input$1 = ($scope, input) => $input_title($scope, input.title);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "E m", 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__setup = ($scope) => $input_title($scope["#childScope/0"], "fixed");
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("E m"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
