// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content("#text/0", "Got: <!>", "b%b");
const $await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_value = $await_promise;
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
