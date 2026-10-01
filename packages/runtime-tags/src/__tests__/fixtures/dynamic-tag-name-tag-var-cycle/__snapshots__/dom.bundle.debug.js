// template.marko
const $template = "<!><!><!><!>";
const $walks = "b1b1c";
_dynamic_tag_var_resume("#text/0");
_dynamic_tag_var_resume("#text/2");
const $b_getter = _hoist_resume("__tests__/template.marko_0_b#5/hoist", "b");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $a);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2", 0, () => $b);
const $a = _var_resume("__tests__/template.marko_0_a#4/var", $dynamicTag2);
function $setup($scope) {
	$dynamicTag($scope, $b_getter($scope));
}
const $b = _var_resume("__tests__/template.marko_0_b#5/var", /*@__PURE__*/ _const("b", ($scope) => _assert_hoist($scope.b)));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
