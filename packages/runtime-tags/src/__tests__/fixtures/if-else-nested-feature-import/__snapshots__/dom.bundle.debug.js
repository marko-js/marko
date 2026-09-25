// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_resume_dynamic_tag_var("#text/0");
const $inputtype_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "body");
const $el_getter = /*@__PURE__*/ _hoist("$el", "BranchScopes:#text/0");
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtype_content, () => $if_content__$el);
const $if_content__input_type = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_type));
const $if_content__setup = $if_content__input_type;
const $if_content__$el = _var_resume("__tests__/template.marko_1_$el#2/var", /*@__PURE__*/ _const("$el", ($scope) => _assert_hoist($scope.$el)));
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b1", $if_content__setup, "<span>else</span>");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => $el_getter($scope)()?.setAttribute("data-mounted", ""));
const $setup = $setup__script;
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_type($scope, input.type);
};
const $input_type = /*@__PURE__*/ _const("input_type", $if_content__input_type);
const $renders = [$inputtype_content];
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input, $renders);
