// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = () => {};
const $inputtag_content = _content_resume("__tests__/template.marko_2*content", "hi");
const $inputwrapwrapnull_content__input_note = /*@__PURE__*/ _closure_get("input_note", ($scope) => _text($scope["#text/0"], $scope._.input_note));
const $inputwrapwrapnull_content__setup = $inputwrapwrapnull_content__input_note;
const $inputwrapwrapnull_content = _content_resume("__tests__/template.marko_1*content", " ", " ", $inputwrapwrapnull_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtag_content);
const $input_tag__OR__input_cls = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_tag, () => ({ class: $scope.input_cls })));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_cls);
const $input_cls = /*@__PURE__*/ _const("input_cls", $input_tag__OR__input_cls);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", $inputwrapwrapnull_content);
const $input_wrap = ($scope, input_wrap) => $dynamicTag2($scope, input_wrap ? wrap_default : null);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_cls($scope, input.cls);
	$input_wrap($scope, input.wrap);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($inputwrapwrapnull_content__input_note);
const $input_note = /*@__PURE__*/ _const("input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
