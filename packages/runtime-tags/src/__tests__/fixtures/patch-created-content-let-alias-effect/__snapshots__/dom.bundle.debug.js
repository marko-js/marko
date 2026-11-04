// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $wrap_content__text__script = _script("__tests__/template.marko_2_text#0:6", ($scope) => _el_read($scope["#div/0"]).textContent = $scope._._.text);
const $wrap_content__text = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_text#0:6/subscribe", "text/7", $wrap_content__text__script, ($scope) => $scope._._);
const $wrap_content__setup = $wrap_content__text;
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<div></div>", " ", $wrap_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $wrap_content($scope));
const $text__closure = /*@__PURE__*/ _closure($wrap_content__text);
const $text = _let("text/6", $text__closure);
const $input_text = $text;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$text($scope, $scope.text + "!");
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_text($scope, input.text);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
