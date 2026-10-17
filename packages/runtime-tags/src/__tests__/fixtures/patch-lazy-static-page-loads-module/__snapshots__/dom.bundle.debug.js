// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%/&");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// page.marko
const $template = "<h1>Static</h1>";
const $walks = "b";
const $setup = ($_) => {};
var page_default = /*@__PURE__*/ _template("__tests__/page.marko", $template, "b");
