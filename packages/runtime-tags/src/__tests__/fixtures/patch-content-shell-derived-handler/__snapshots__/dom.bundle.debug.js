// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $wrapper_content__label = /*@__PURE__*/ _const("label");
const $wrapper_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => $wrapper_content__label($scope, $scope._._.input_label), ($scope) => $scope._._), 0));
const $wrapper_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$shown($scope._._, $scope.label);
}));
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_label($scope);
	$wrapper_content__setup__script($scope);
};
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<button>show</button>", " ", $wrapper_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
const $shown = _let("shown/6", ($scope) => _text($scope["#text/1"], $scope.shown));
function $setup($scope) {
	$shown($scope, "");
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($wrapper_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
