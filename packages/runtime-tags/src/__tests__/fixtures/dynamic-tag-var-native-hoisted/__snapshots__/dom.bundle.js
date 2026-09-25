// template.marko
_resume_dynamic_tag_var(0);
const $item_getter = _hoist_resume("a2", 3, "Ab");
const $for_content__$item = _var_resume("a4", /*@__PURE__*/ _const(3));
const $el_getter = /*@__PURE__*/ _hoist(2, "Aa");
const $if_content__$el = _var_resume("a3", /*@__PURE__*/ _const(2));
const $setup__script = _script("a5", ($scope) => {
	$el_getter($scope)()?.setAttribute("data-mounted", "");
	for (const item of $item_getter($scope)) item.setAttribute("data-mounted", "");
});
