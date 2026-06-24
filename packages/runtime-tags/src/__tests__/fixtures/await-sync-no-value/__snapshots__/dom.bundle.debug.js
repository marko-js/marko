// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content = /*@__PURE__*/ _await_content("#text/0", "Resolved with no value binding", "b");
const $await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $setup = $await_content;
const $input_value = $await_promise;
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
