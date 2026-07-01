// template.marko
const $template = "<!><div>always</div><!><div>never visible</div><!><!>";
const $walks = "c%c%c";
const $show = /* @__PURE__ */ _show("#text/1", "#text/0");
function $setup($scope) {
	$show($scope, false);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
