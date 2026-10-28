// tags/reader.marko
const $template$2 = "<button>read</button>";
const $walks$2 = " b";
const $setup__script = _script("__tests__/tags/reader.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input.onRead($scope.input.read());
}));
const $setup$2 = $setup__script;
const $input$2 = /*@__PURE__*/ _const("input");
var reader_default = /*@__PURE__*/ _template("__tests__/tags/reader.marko", $template$2, " b", $setup$2, $input$2);

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
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("D%l");
const $wrapper_content__label = /*@__PURE__*/ _const("label", ($scope) => $input$2($scope["#childScope/0"], {
	read: $read($scope),
	onRead: $onRead($scope)
}));
const $wrapper_content__input_label = /*@__PURE__*/ _closure_get("input_label/6", ($scope) => $wrapper_content__label($scope, $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_label($scope);
	$setup$2($scope["#childScope/0"]);
};
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $wrapper_content__setup);
const $shown = /*@__PURE__*/ _let("shown/5", ($scope) => _text($scope["#text/1"], $scope.shown));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
	$shown($scope, "");
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($wrapper_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $onRead = ($scope) => function(value) {
	$shown($scope._, value);
};
const $read = ($scope) => () => $scope.label;
_resumed["__tests__/template.marko_1/onRead"] = $onRead;
_bind_resume("__tests__/template.marko_1/read label", $read);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
