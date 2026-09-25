// template.marko
_dynamic_tag_var_resume(0);
const $inputitemType_content__setup = ($scope) => _text($scope.a, $scope._.M);
const $inputitemType_content = _content("a3", "item <!>", "b%", $inputitemType_content__setup);
_content_resume($inputitemType_content);
const $inputtype_content = _content("a1", "body");
const $item_getter = _hoist_resume("a0", 3, "Ab");
const $for_content__$item = _var_resume("a4", /*@__PURE__*/ _const(3));
const $el_getter = /*@__PURE__*/ _hoist(2, "Aa");
const $if_content__$el = _var_resume("a2", /*@__PURE__*/ _const(2));
const $setup__script = _script("a5", ($scope) => {
	$el_getter($scope)()?.setAttribute("data-mounted", "");
	for (const item of $item_getter($scope)) item.setAttribute("data-mounted", "");
});
