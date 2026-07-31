// template.marko
const $Row_content__walks = "D l", $Row_content__template = "<div> </div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>added=<!></div>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&Db%l`)($Row_content__walks);
const $setup = () => {};
const $Row_content__input_cell_label = ($scope, input_cell_label) => _text($scope, "#text/0", input_cell_label);
const $Row_content__$params = ($scope, $params2) => $Row_content__input($scope, $params2[0]);
const $Row_content__input = ($scope, input) => $Row_content__input_cell($scope, input.cell);
const $Row_content__input_cell = ($scope, input_cell) => $Row_content__input_cell_label($scope, input_cell?.label);
const $input_obj_label = ($scope, input_obj_label) => $Row_content__input_cell_label($scope["#childScope/0"], input_obj_label);
const $input_obj = ($scope, input_obj) => {
	_text($scope, "#text/1", Object.getOwnPropertySymbols(input_obj).length);
	$input_obj_label($scope, input_obj?.label);
};
const $input = ($scope, input) => $input_obj($scope, input.obj);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
