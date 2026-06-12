// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&c";
let $load_Child_setup = /* @__PURE__ */ _load_setup("#text/0", "#childScope/1", () => import("./v:child.marko.setup.mjs"));
const $setup = $load_Child_setup;
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<div id=ref>0</div>";
const $walks = "b";
const $promise__script = _script("__tests__/child.marko_0_promise", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.promise;
})());
const $promise = /* @__PURE__ */ _const("promise", $promise__script);
function $setup($scope) {
	$promise($scope, Promise.resolve("hello"));
}
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, "b", $setup);

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
