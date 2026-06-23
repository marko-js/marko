// template.marko
const $template = "<script><\/script>";
const $walks = " b";
const $injection = /* @__PURE__ */ _let("injection/1", ($scope) => _text_content($scope["#script/0"], `var x = '${_to_text($scope.injection)}'`));
function $setup($scope) {
	_attr_nonce($scope, "#script/0");
	$injection($scope, "<\/SCRIPT>");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
