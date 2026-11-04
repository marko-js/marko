// tags/one.marko
const $template$1 = "<i>one</i>";
const $walks$1 = "b";
const $setup$1 = ($_) => {};
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => _return($scope, $scope.input_a + "!"));
const $input$1 = ($scope, input) => $input_a($scope, input.a);
var one_default = /*@__PURE__*/ _template("__tests__/tags/one.marko", $template$1, "b", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = "<!><!><input><label>after <!></label>";
const $walks = "b1b b Db%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, ($_) => $x);
const $x = _fill_var_resume("__tests__/template.marko_0_x#8/var", ($scope, x) => _text($scope["#text/4"], x));
const $input_show = ($scope, input_show) => $dynamicTag($scope, input_show ? one_default : null, ($_) => ({ a: "a" }));
const $after = ($scope, after) => {
	_attr($scope["#input/2"], "id", after);
	_attr($scope["#label/3"], "for", after);
};
function $setup($scope) {
	$after($scope, _id($scope));
}
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
