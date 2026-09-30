// child.marko
const $template = "<span class=child>child <!></span>";
const $walks = "Db%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, 0, $input);

// other.marko
const $template$1 = "<span class=other>other <!></span>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var other_default = /*@__PURE__*/ _template("__tests__/other.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $if_content__input_label__OR__alt = _fill_join("__tests__/template.marko_fill1", "alt", /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _init_join("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _or(3, ($scope) => $if_content__dynamicTag($scope, $scope.alt ? Child : other_default, () => ({ label: $scope._.input_label })))), 0, "#main/0", 0));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#main/0", 0, $if_content__input_label__OR__alt);
const $if_content__alt = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "alt/2", $if_content__input_label__OR__alt);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__alt($scope, !$scope.alt);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__setup__script($scope);
	$if_content__alt($scope, false);
};
const $if = /*@__PURE__*/ _if("#main/0", "<button>toggle</button><!><!>", " b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
