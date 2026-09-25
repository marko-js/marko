// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
_resume_dynamic_tag_var("#text/0");
const $inputitemType_content__setup = ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"]);
const $inputitemType_content = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "item <!>", "b%", $inputitemType_content__setup);
const $inputitemType_content2 = /*@__PURE__*/ _content_resume($inputitemType_content);
const $inputtype_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "body");
const $item_getter = _hoist_resume("__tests__/template.marko_0_$item#3/hoist", "$item", "BranchScopes:#text/1");
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputitemType_content, () => $for_content__$item);
const $for_content__input_itemType = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__dynamicTag($scope, $scope._.input_itemType));
const $for_content__setup = $for_content__input_itemType;
const $for_content__$item = _var_resume("__tests__/template.marko_2_$item#3/var", /*@__PURE__*/ _const("$item", ($scope) => _assert_hoist($scope.$item)));
const $el_getter = /*@__PURE__*/ _hoist("$el", "BranchScopes:#text/0");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content, () => $if_content__$el);
const $if_content__input_type = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_type));
const $if_content__setup = $if_content__input_type;
const $if_content__$el = _var_resume("__tests__/template.marko_1_$el#2/var", /*@__PURE__*/ _const("$el", ($scope) => _assert_hoist($scope.$el)));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b1", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/1", "<!><!><!>", "b1", $for_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	$el_getter($scope)()?.setAttribute("data-mounted", "");
	for (const item of $item_getter($scope)) item.setAttribute("data-mounted", "");
});
function $setup($scope) {
	$for($scope, [
		2,
		0,
		1
	]);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_type($scope, input.type);
	$input_itemType($scope, input.itemType);
};
const $input_type = /*@__PURE__*/ _const("input_type", $if_content__input_type);
const $input_itemType = /*@__PURE__*/ _const("input_itemType", $for_content__input_itemType);
const $renders = [$inputtype_content, $inputitemType_content2];
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input, $renders);
