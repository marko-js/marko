// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__fieldId = ($scope, fieldId) => {
	_attr($scope["#label/0"], "for", fieldId);
	_attr($scope["#input/1"], "id", fieldId);
};
const $if_content__setup = ($scope) => $if_content__fieldId($scope, _id($scope));
const $if = /*@__PURE__*/ _if("#main/0", "<label>Name</label><input>", " b ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
