// tags/price.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input = ($scope, input) => _text($scope["#text/0"], input.format(input.value));
var price_default = /*@__PURE__*/ _template("__tests__/tags/price.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("D l", "D l");
const formatNumber = (n) => {
	return "$" + n.toFixed(2);
};
function formatNumber2(n) {
	return "$" + n.toFixed(2);
}
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], {
		value: 1,
		format: formatNumber
	});
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input($scope["#childScope/1"], {
		value: 1.1111,
		format: formatNumber2
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
