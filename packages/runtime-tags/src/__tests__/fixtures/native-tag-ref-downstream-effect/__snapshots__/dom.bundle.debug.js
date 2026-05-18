// template.marko
const $template = "<div></div><!><!>";
const $walks = " b%c";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _el_read($scope._["#div/0"]).textContent = "hello");
const $if_content__setup = $if_content__setup__script;
const $if = /* @__PURE__ */ _if("#text/1", 0, 0, $if_content__setup);
function $setup($scope) {
	$if($scope, true ? 0 : 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
