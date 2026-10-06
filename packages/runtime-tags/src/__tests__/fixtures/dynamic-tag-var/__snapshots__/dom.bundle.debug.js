// tags/child/index.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, 1);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child/index.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!><!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b1b1b1c`)("");
const $data = ($scope, data1) => {};
function $setup($scope) {
	_var($scope, "#childScope/0", $data);
	$setup$1($scope["#childScope/0"]);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/6");
const $input_show = ($scope, input_show) => {
	$dynamicTag($scope, input_show && child_default);
	$dynamicTag3($scope, input_show && "div");
};
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_dynamic = $dynamicTag2;
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_dynamic($scope, input.dynamic);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
