// tags/render-effect.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input = /*@__PURE__*/ _const("input", ($scope) => _return($scope, $scope.input.value()));
var render_effect_default = /*@__PURE__*/ _template("__tests__/tags/render-effect.marko", "", "", $setup$1, $input);

// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { value: function() {} });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
