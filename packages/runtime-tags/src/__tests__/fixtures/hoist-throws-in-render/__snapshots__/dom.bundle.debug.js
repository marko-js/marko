// template.marko
const $template = "<!><!><div> </div>";
const $walks = "b%bD l";
const $x_getter = _hoist("x", "BranchScopes:#text/0");
const $if_content__x = /* @__PURE__ */ _const("x", ($scope) => _assert_hoist($scope.x));
const $if_content__setup = ($scope) => $if_content__x($scope, 1);
const $if = /* @__PURE__ */ _if("#text/0", 0, 0, $if_content__setup);
function $setup($scope) {
	_text($scope["#text/1"], $x_getter($scope)());
	$if($scope, 1 ? 0 : 1);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
