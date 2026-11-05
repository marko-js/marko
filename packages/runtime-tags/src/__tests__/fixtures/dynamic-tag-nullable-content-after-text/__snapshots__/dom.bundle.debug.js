// tags/child.marko
const $template$1 = "<b><!></b>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<div>x<!></div><button>inc</button>";
const $walks = "Db%l b";
const $inputshowChildnull_content__n = /*@__PURE__*/ _closure_get("n/6", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:5/subscribe");
const $inputshowChildnull_content__setup = $inputshowChildnull_content__n;
const $inputshowChildnull_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " ", $inputshowChildnull_content__setup);
const $n__closure = /*@__PURE__*/ _closure($inputshowChildnull_content__n);
const $n = /*@__PURE__*/ _let("n/5", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputshowChildnull_content);
const $input_show = ($scope, input_show) => $dynamicTag($scope, input_show ? child_default : null);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
