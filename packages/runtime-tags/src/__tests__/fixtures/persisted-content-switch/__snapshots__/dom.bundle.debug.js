// tags/widget/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var widget_default = /*@__PURE__*/ _template("__tests__/tags/widget/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%b l`)("D%l");
const $elseif_content2__input_inner = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_inner", /*@__PURE__*/ _closure_get("input_inner", ($scope) => _text($scope["#text/0"], $scope._._._.input_inner), ($scope) => $scope._._._), 1);
const $elseif_content2__setup = $elseif_content2__input_inner;
const $widget_content2__if = /*@__PURE__*/ _if("#text/0", "<b>A</b>", 0, 0, "<i>B:<!></i>", "Db%", $elseif_content2__setup);
const $widget_content2__input_inner = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_inner", /*@__PURE__*/ _closure_get("input_inner", ($scope) => $widget_content2__if($scope, $scope._._.input_inner === "a" ? 0 : $scope._._.input_inner === "b" ? 1 : 2), ($scope) => $scope._._), 0);
const $widget_content2__setup = $widget_content2__input_inner;
const $widget_content2 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<!><!><!>", "b%", $widget_content2__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $widget_content2($scope));
const $elseif_content__input_kind = /*@__PURE__*/ _closure_get("input_kind", ($scope) => _text($scope["#text/0"], $scope._._.input_kind), ($scope) => $scope._._);
const $elseif_content__setup = $elseif_content__input_kind;
const $widget_content__if = /*@__PURE__*/ _if("#text/0", "<b>A</b>", 0, 0, "<i>B:<!></i>", "Db%", $elseif_content__setup);
const $widget_content__input_kind = /*@__PURE__*/ _closure_get("input_kind", ($scope) => $widget_content__if($scope, $scope._.input_kind === "a" ? 0 : $scope._.input_kind === "b" ? 1 : 2));
const $widget_content__setup = $widget_content__input_kind;
const $widget_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $widget_content__setup);
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let("open/7", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $widget_content($scope));
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_kind($scope, input.kind);
	$input_inner($scope, input.inner);
};
const $input_kind__closure = /*@__PURE__*/ _closure($widget_content__input_kind, $elseif_content__input_kind);
const $input_kind = /*@__PURE__*/ _const("input_kind", $input_kind__closure);
const $input_inner__closure = /*@__PURE__*/ _closure($widget_content2__input_inner, $elseif_content2__input_inner);
const $input_inner = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_inner", $input_inner__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
