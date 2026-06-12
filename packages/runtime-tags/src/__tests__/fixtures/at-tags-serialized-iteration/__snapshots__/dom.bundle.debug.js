// tags/list.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_item__script = _script("__tests__/tags/list.marko_0_input_item", ($scope) => _el_read($scope["#div/0"]).textContent = [...$scope.input_item].map((item) => item.label).join("|"));
const $input_item = /* @__PURE__ */ _const("input_item", $input_item__script);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /* @__PURE__ */ _template("__tests__/tags/list.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `/${_w0}&/${_w1}&`)(" b", " b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_item($scope["#childScope/0"], attrTags(attrTags(attrTag({ label: "a" }), { label: "b" }), { label: "c" }));
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_item($scope["#childScope/1"], attrTag({ label: "solo" }));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
