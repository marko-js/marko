// tags/note.marko
const $template$2 = "<i>note</i>";
const $walks$2 = "b";
const $setup$2 = ($_) => {};
var note_default = /*@__PURE__*/ _template("__tests__/tags/note.marko", $template$2, "b");

// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content__OR__input_label = /*@__PURE__*/ _fill_join("__tests__/tags/wrap.marko_fill1", "input_label", /*@__PURE__*/ _fill_join("__tests__/tags/wrap.marko_fill0", "input_content", /*@__PURE__*/ _or_resume("__tests__/tags/wrap.marko_0_input_content#3_input_label#4/init", 5, ($scope) => $dynamicTag($scope, $scope.input_content, ($_) => ({ label: $scope.input_label })))));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_content__OR__input_label);
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_label$1($scope, input.label);
};
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content2__setup = $if_content2__label;
const $content_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $content_content__open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "open/6", ($scope) => $content_content__if($scope, $scope.open ? 0 : 1));
const $content_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$content_content__open($scope, !$scope.open);
}));
const $content_content__setup = ($scope) => {
	$content_content__open($scope, true);
	$content_content__setup__script($scope);
};
const $content_content__$params = ($scope, $params2) => $content_content__label($scope, $params2[0].label);
const $content_content__label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "label", $if_content2__label);
const $content_content = _content("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0) => `<!><!><button>toggle</button>${_w0}`)($template$2), /*@__PURE__*/ ((_w0) => `b%b b/${_w0}&`)("b"), $content_content__setup, $content_content__$params);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$input_content($scope["#childScope/0"], attrTag({ content: $content_content($scope) }));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
