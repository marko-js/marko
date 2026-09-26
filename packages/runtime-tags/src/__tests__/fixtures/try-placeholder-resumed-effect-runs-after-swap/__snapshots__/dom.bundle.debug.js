// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content3__c = ($scope, c) => _text($scope["#text/0"], c);
const $await_content3__$params = ($scope, $params4) => $await_content3__c($scope, $params4[0]);
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $await_content__a = ($scope, a) => _text($scope["#text/1"], a);
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => console.log("connected " + _el_read($scope["#span/0"]).isConnected));
const $await_content__setup = $await_content__setup__script;
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", " D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<div> </div>", "D ");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("a", 1));
	$try_content__await_promise2($scope, resolveAfter("b", 3));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
function $setup($scope) {
	$await_content3($scope);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$await_promise($scope, resolveAfter("c", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
