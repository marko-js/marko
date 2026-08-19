// tags/card/index.marko
const $template$1 = "<div id=fixed> </div>";
const $walks$1 = " D l";
const $setup$1 = () => {};
const $input_attrs__script = _script("__tests__/tags/card/index.marko_0_input_attrs#4", ($scope) => _attrs_script($scope, "#div/0"));
const $input_attrs = /*@__PURE__*/ _const("input_attrs", ($scope) => {
	_attrs_partial($scope, "#div/0", $scope.input_attrs, { id: 1 });
	$input_attrs__script($scope);
});
const $input_title$1 = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $input$1 = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_title$1($scope, input.title);
};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const $if_content__input_title = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_title$1($scope["#childScope/0"], $scope._.input_title));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$input_attrs($scope["#childScope/0"], {
		class: "x",
		"data-a": "1"
	});
};
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_title($scope, input.title);
};
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
