// child.marko
const $template = "<div id=ref>0</div>";
const $walks = "b";
const $promise__script = _script("__tests__/child.marko_0_promise#0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.promise;
})());
const $promise = /*@__PURE__*/ _const("promise", $promise__script);
function $setup($scope) {
	$promise($scope, resolveAfter("hello", 2));
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b", $setup);

// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<html><head></head><body>${_w0}<!><!></body></html>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `DbD/${_w0}&%b%m`)($walks$1);
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params4) => $await_content2__v($scope, $params4[0]);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", " ", " ", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$load_Child_setup($scope, $scope["#childScope/2"], $scope["#text/1"]);
	$try_content__await_promise($scope, resolveAfter("a", 1));
};
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!><!>", "b%b%/&", $try_content__setup);
const $await_content2 = /*@__PURE__*/ _await_content("#text/2", "<p> </p>", "D ");
const $await_promise = /*@__PURE__*/ _await_promise("#text/2", $await_content2__$params);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$await_content2($scope);
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$await_promise($scope, resolveAfter("b", 3));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
