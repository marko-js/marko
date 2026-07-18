// tags/hero/index.marko
const $template$1 = "<section><h1> </h1><!></section>";
const $walks$1 = " E l%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $input_variant = ($scope, input_variant) => _attr_class($scope["#section/0"], `${"hero"} ${"hero"}--${input_variant}`);
const $input_title$1 = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => {
	$input_variant($scope, input.variant);
	$input_title$1($scope, input.title);
	$input_content($scope, input.content);
};
var hero_default = /*@__PURE__*/ _template("__tests__/tags/hero/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<section class="hero hero--launch"><h1>Meet Comptime</h1><button>clap <!></button></section>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `Db Db%m/${_w0}&`)($walks$1);
const $hero_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p>still a component</p>", "b");
const $claps = /*@__PURE__*/ _let("claps/6", ($scope) => _text($scope["#text/1"], $scope.claps));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$claps($scope, $scope.claps + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_content_direct($scope["#childScope/2"], $hero_content($scope));
	$input_variant($scope["#childScope/2"], "live");
	$claps($scope, 0);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/2"], `runtime ${input_title}`);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
