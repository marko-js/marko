// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content("#text/0", "Sync: <!>", "b%b");
const $await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /* @__PURE__ */ _await_content("#text/1", "Async: <!>", "b%b");
const $await_promise2 = /* @__PURE__ */ _await_promise("#text/1", $await_content2__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content2($scope);
	$await_promise2($scope, resolveAfter("async", 1));
}
const $input_sync = $await_promise;
const $input = ($scope, input) => $input_sync($scope, input.sync);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
