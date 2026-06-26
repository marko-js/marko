// tags/icons/icon-star.marko
const $template$2 = "<span class=icon-star>star</span>";
const $walks$2 = "b";
const $setup$2 = () => {};
var icon_star_default = /* @__PURE__ */ _template("__tests__/tags/icons/icon-star.marko", $template$2, "b", $setup$2);

// tags/util/greeting.marko
const $template$1 = "<p>Hello, <!>!</p>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $input_name = ($scope, input_name) => _text($scope["#text/0"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var greeting_default = /* @__PURE__ */ _template("__tests__/tags/util/greeting.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("b", $walks$1);
function $setup($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_name($scope["#childScope/1"], "Marko");
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
