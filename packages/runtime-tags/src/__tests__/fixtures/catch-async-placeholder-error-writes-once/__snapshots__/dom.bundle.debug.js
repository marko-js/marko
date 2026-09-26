// child.marko
const $template = "<div id=ref>0</div>";
const $walks = "b";
const $promise__script = _script("__tests__/child.marko_0_promise#0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.promise;
})());
const $promise = /*@__PURE__*/ _const("promise", $promise__script);
function $setup($scope) {
	$promise($scope, resolveAfter("hello", 3));
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $await_content2__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params4) => $await_content2__value($scope, $params4[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
};
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_4*content", "caught <!><!><!>", "b%b%/&", $catch_content__setup, $catch_content__$params);
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $placeholder_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $placeholder_content__setup = ($scope) => {
	$await_content($scope);
	$placeholder_content__await_promise($scope, resolveAfter("placeholder", 2));
};
const $placeholder_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $placeholder_content__setup);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter("content", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
