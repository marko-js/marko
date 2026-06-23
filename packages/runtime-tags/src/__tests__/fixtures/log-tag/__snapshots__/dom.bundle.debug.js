// template.marko
const $template = "";
const $walks = "";
const staticVar = "static var";
const $tagVar = /* @__PURE__ */ _const("tagVar", ($scope) => console.log($scope.tagVar));
function $setup($scope) {
	console.log("identifier");
	console.log(staticVar);
	$tagVar($scope, "tag var");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", "", "", $setup);
