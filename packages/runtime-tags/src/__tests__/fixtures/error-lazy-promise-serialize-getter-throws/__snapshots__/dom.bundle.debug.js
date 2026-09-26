// template.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "";
const $walks = "";
const $promise__script = _script("__tests__/child.marko_0_promise#0", ($scope) => (async () => {
	console.log(await $scope.promise);
})());
const $promise = /*@__PURE__*/ _const("promise", $promise__script);
function $setup($scope) {
	$promise($scope, resolveAfter({ get bad() {
		throw new Error("getter failed");
	} }, 1));
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", "", "", $setup);

// v:child.marko.setup.js
const _ = [
	"",
	"",
	$setup
];
