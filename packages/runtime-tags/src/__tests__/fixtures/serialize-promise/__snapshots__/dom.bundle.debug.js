// template.marko
const $template = "<div id=ref>0</div>";
const $walks = "b";
const $promise__script = _script("__tests__/template.marko_0_promise", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.promise;
})());
const $promise = /* @__PURE__ */ _const("promise", $promise__script);
function $setup($scope) {
	$promise($scope, Promise.resolve("hello"));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b", $setup);
