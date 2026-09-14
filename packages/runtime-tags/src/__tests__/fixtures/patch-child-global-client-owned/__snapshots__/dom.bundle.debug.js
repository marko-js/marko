// tags/panel/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_body = /*@__PURE__*/ _fill_join("__tests__/tags/panel/index.marko0", "input_body", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_body)));
const $if_content__setup = $if_content__input_body;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input = ($scope, input) => {
	$input_open($scope, input.open);
	$input_body($scope, input.body);
};
const $input_body = /*@__PURE__*/ _fill_const("__tests__/tags/panel/index.marko0", "input_body", $if_content__input_body);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel/index.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("b%c");
const $body_content__$global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_1_$global_brand#3/global", /*@__PURE__*/ _closure_get("$global_brand", ($scope) => _text($scope["#text/0"], $scope.$global.brand)));
const $body_content__setup = $body_content__$global_brand;
const $body_content = _content_resume("__tests__/template.marko_1*content", "<em> </em>", "D ", $body_content__setup);
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $input_open($scope["#childScope/0"], $scope.count % 2 === 0));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_body($scope["#childScope/0"], attrTag({ content: $body_content($scope) }));
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
