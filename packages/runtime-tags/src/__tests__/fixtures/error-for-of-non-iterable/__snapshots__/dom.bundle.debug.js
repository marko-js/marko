// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", "<li> </li>", "D l", 0, $for_content__$params);
const $input_value = ($scope, input_value) => $for($scope, [input_value]);
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
