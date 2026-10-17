// tags/panel.marko
const $template$1 = "<div class=panel></div>";
const $walks$1 = " b";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#div/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#div/0", "<!><!><!>", "b%", $if_content__setup);
const $input_open = ($scope, input_open) => $if($scope, input_open ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_open($scope, input.open);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_content", $if_content__input_content);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, " b", 0, $input$1);

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $panel_content__p_text = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "p_text", /*@__PURE__*/ _closure_get("p_text/7", ($scope) => _text($scope["#text/0"], $scope._.p_text), 0, "__tests__/template.marko_2_p_text#1:3/subscribe"), 0);
const $panel_content__setup = $panel_content__p_text;
const $panel_content = _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $panel_content__setup);
const $for_content__open = _resumed["__tests__/template.marko_1_open#0:5/init"] = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $input_open($scope["#childScope/0"], $scope._.open));
const $for_content__setup = ($scope) => {
	$for_content__open._($scope);
	$input_content($scope["#childScope/0"], $panel_content($scope));
};
const $for_content__$params = ($scope, $params2) => $for_content__p_text($scope, $params2[0]?.text);
const $for_content__p_text__closure = /*@__PURE__*/ _closure($panel_content__p_text);
const $for_content__p_text = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "p_text", $for_content__p_text__closure);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/5", $for_content__open);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $for = /*@__PURE__*/ _for_of("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $for_content__setup, $for_content__$params);
const $input_panels = ($scope, input_panels) => $for($scope, [input_panels, "id"]);
const $input = ($scope, input) => $input_panels($scope, input.panels);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
