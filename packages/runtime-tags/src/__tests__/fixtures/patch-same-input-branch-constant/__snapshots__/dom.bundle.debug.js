// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
let n = 0;
const $if = /*@__PURE__*/ _if("#main/0", "<b> </b>", "D ");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
