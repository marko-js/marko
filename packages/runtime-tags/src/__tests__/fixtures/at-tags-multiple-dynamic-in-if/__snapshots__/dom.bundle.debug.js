// tags/custom-tag/index.marko
const $template$1 = "<div>x: <!> y: <!></div>";
const $walks$1 = "Db%c%l";
const $setup$1 = () => {};
const $x_value = ($scope, x_value) => _text($scope["#text/0"], x_value);
const $y_value = ($scope, y_value) => _text($scope["#text/1"], y_value);
const $input$1 = ($scope, input) => {
	$x($scope, input.x);
	$y($scope, input.y);
};
const $x = ($scope, x) => $x_value($scope, x?.value);
const $y = ($scope, y) => $y_value($scope, y?.value);
var custom_tag_default = /* @__PURE__ */ _template("__tests__/tags/custom-tag/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
const $cond = /* @__PURE__ */ _const("cond", ($scope) => {
	let $x$1, $y$1;
	if ($scope.cond) {
		$x$1 = attrTag({ value: 1 });
		$y$1 = attrTag({ value: 2 });
	}
	$x($scope["#childScope/0"], $x$1);
	$y($scope["#childScope/0"], $y$1);
});
const $input = ($scope, input) => $cond($scope, input.cond);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
