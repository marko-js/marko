// tags/child/index.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, 1);
}
var child_default = /* @__PURE__ */ _template("__tests__/tags/child/index.marko", "", "", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!><!><!><!>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `b0${_w0}&1b1b1c`)("");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/2", 0, () => $data);
const $data = _var_resume("__tests__/template.marko_0_data2/var", ($scope, data2) => {});
const $dynamicTag3 = /* @__PURE__ */ _dynamic_tag("#text/6", 0, () => $el);
const $input_show = ($scope, input_show) => {
	$dynamicTag($scope, input_show && child_default);
	$dynamicTag3($scope, input_show && "div");
};
const $dynamicTag2 = /* @__PURE__ */ _dynamic_tag("#text/4", 0, () => $data2);
const $data2 = _var_resume("__tests__/template.marko_0_data3/var", ($scope, data3) => {});
const $input_dynamic = ($scope, input_dynamic) => $dynamicTag2($scope, input_dynamic);
const $el = _var_resume("__tests__/template.marko_0_el1/var", ($scope, el1) => {});
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_dynamic($scope, input.dynamic);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
