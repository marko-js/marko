// template.marko
const $template = "<script type=application/ld+json><\/script>";
const $walks = "! b";
const $setup = ($_) => {};
const $input_a = ($scope, input_a) => _start_late($scope["#script/0"], JSON.stringify({ a: input_a }));
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "! b", 0, $input);
