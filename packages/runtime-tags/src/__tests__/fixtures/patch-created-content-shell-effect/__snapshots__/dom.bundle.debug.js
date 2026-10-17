// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_body_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_body = $dynamicTag;
const $input$1 = ($scope, input) => $input_body($scope, input.body);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $body_content__setup__script = _script("__tests__/template.marko_2", ($scope) => console.log("body setup"));
const $body_content__setup = $body_content__setup__script;
const $body_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p>body</p>", 0, $body_content__setup);
const $if_content__setup = ($scope) => $input_body($scope["#childScope/0"], attrTag({ content: $body_content($scope) }));
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
