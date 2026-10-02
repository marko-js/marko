// template.marko
const $template = "<!><!><!><p>after</p>";
const $walks = "b%b%c";
let $load_Thrower_setup = /*@__PURE__*/ _load_setup(() => import("./v:thrower.marko.setup.mjs"));
const $await_content3__d = ($scope, d) => _text($scope["#text/0"], d);
const $await_content3__$params = ($scope, $params5) => $await_content3__d($scope, $params5[0]);
const $await_content2__c = ($scope, c) => _text($scope["#text/0"], c);
const $await_content2__$params = ($scope, $params4) => $await_content2__c($scope, $params4[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", " ", " ");
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
const $await_content__setup = ($scope) => {
	$load_Thrower_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content2($scope);
	$await_content__await_promise($scope, resolveAfter("c", 4));
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!><!>", "b%/&b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("b", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $await_content3 = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content3__$params);
function $setup($scope) {
	$await_content3($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("d", 2));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// thrower.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
function $setup($scope) {
	$dynamicTag($scope, (() => {
		throw new Error("ERROR!");
	})());
}
var thrower_default = /*@__PURE__*/ _template("__tests__/thrower.marko", $template, "b%c", $setup);

// v:thrower.marko.setup.js
const _ = [
	$template,
	"b%c",
	$setup
];
