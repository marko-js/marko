// template.marko
const $template = "a<!>g<!>m";
const $walks = "b%c%c";
const $await_content6__result = ($scope, result6) => _text($scope["#text/0"], result6);
const $await_content6__$params = ($scope, $params7) => $await_content6__result($scope, $params7[0]);
const $await_content5__result = ($scope, result5) => _text($scope["#text/0"], result5);
const $await_content6 = /* @__PURE__ */ _await_content("#text/1", " ", " b");
const $await_content5__await_promise = /* @__PURE__ */ _await_promise("#text/1", $await_content6__$params);
const $await_content5__setup = ($scope) => {
	$await_content6($scope);
	$await_content5__await_promise($scope, resolveAfter("j", 3));
};
const $await_content5__$params = ($scope, $params6) => $await_content5__result($scope, $params6[0]);
const $await_content4__result = ($scope, result4) => _text($scope["#text/0"], result4);
const $await_content5 = /* @__PURE__ */ _await_content("#text/1", "<!><!>k", "%b%c", $await_content5__setup);
const $await_content4__await_promise = /* @__PURE__ */ _await_promise("#text/1", $await_content5__$params);
const $await_content4__setup = ($scope) => {
	$await_content5($scope);
	$await_content4__await_promise($scope, resolveAfter("i", 2));
};
const $await_content4__$params = ($scope, $params5) => $await_content4__result($scope, $params5[0]);
const $await_content3__result = ($scope, result3) => _text($scope["#text/0"], result3);
const $await_content3__$params = ($scope, $params4) => $await_content3__result($scope, $params4[0]);
const $await_content2__result = ($scope, result2) => _text($scope["#text/0"], result2);
const $await_content3 = /* @__PURE__ */ _await_content("#text/1", " ", " b");
const $await_content2__await_promise = /* @__PURE__ */ _await_promise("#text/1", $await_content3__$params);
const $await_content2__setup = ($scope) => {
	$await_content3($scope);
	$await_content2__await_promise($scope, resolveAfter("d", 3));
};
const $await_content2__$params = ($scope, $params3) => $await_content2__result($scope, $params3[0]);
const $await_content__result = ($scope, result1) => _text($scope["#text/0"], result1);
const $await_content2 = /* @__PURE__ */ _await_content("#text/1", "<!><!>e", "%b%c", $await_content2__setup);
const $await_content__await_promise = /* @__PURE__ */ _await_promise("#text/1", $await_content2__$params);
const $await_content__setup = ($scope) => {
	$await_content2($scope);
	$await_content__await_promise($scope, resolveAfter("c", 2));
};
const $await_content__$params = ($scope, $params2) => $await_content__result($scope, $params2[0]);
const $await_content = /* @__PURE__ */ _await_content("#text/0", "<!><!>f", "%b%c", $await_content__setup);
const $await_promise = /* @__PURE__ */ _await_promise("#text/0", $await_content__$params);
const $await_content4 = /* @__PURE__ */ _await_content("#text/1", "<!><!>l", "%b%c", $await_content4__setup);
const $await_promise2 = /* @__PURE__ */ _await_promise("#text/1", $await_content4__$params);
function $setup($scope) {
	$await_content($scope);
	$await_content4($scope);
	$await_promise($scope, resolveAfter("b", 1));
	$await_promise2($scope, resolveAfter("h", 1));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
