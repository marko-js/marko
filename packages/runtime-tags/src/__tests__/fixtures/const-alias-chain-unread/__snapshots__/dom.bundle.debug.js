// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup = () => {};
const $o_name = ($scope, o_name) => _text($scope["#text/0"], o_name);
const $input = ($scope, input) => $o($scope, input.o);
const $o = ($scope, o) => $o_name($scope, o?.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
