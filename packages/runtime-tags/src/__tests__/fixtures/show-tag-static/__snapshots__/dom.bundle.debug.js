// template.marko
const $template = "<!><div>always</div><div>never visible</div><!><!>";
const $walks = "d%c";
const $show = /*@__PURE__*/ _show("#text/0");
function $setup($scope) {
	$show($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "d%c", $setup);
