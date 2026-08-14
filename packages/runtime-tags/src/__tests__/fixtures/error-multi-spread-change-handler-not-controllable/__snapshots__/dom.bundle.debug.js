// template.marko
const $template = "<input>";
const $walks = " b";
const $setup = () => {};
const $input_attrs__OR__input_more__script = _script("__tests__/template.marko_0_input_attrs#3_input_more#4", ($scope) => _attrs_script($scope, "#input/0"));
const $input_attrs__OR__input_more = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs($scope, "#input/0", {
		...$scope.input_attrs,
		...$scope.input_more
	}, _controllable_input);
	$input_attrs__OR__input_more__script($scope);
});
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $input_attrs__OR__input_more);
const $input_more = /*@__PURE__*/ _const("input_more", $input_attrs__OR__input_more);
const $input = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_more($scope, input.more);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
