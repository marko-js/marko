// tags/inner.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var inner_default = /* @__PURE__ */ _template("__tests__/tags/inner.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $inner_content = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "shown content", "b");
const $if_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $inner_content($scope));
};
const $if = /* @__PURE__ */ _if("#text/1", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /* @__PURE__ */ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
