// tags/render-input.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $input_data_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/0");
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_data_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_data($scope, input.data);
const $input_data = ($scope, input_data) => $input_data_content($scope, input_data?.content);
var render_input_default = /* @__PURE__ */ _template("__tests__/tags/render-input.marko", $template$2, "b%c", $setup$2, $input$1);

// tags/my-box.marko
const $template$1 = "<div></div><button type=button class=toggle>toggle</button><div class=echo></div>";
const $walks$1 = " b b b";
const $if_content__input = /* @__PURE__ */ _if_closure("#div/2", 0, ($scope) => $input_data($scope["#childScope/0"], $scope._.input));
const $if_content__setup = ($scope) => {
	$if_content__input._($scope);
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#div/2", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$2), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $show = /* @__PURE__ */ _let("show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/tags/my-box.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup$1($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input__script = _script("__tests__/tags/my-box.marko_0_input", ($scope) => _attrs_script($scope, "#div/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$if_content__input($scope);
	$input__script($scope);
});
var my_box_default = /* @__PURE__ */ _template("__tests__/tags/my-box.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $mybox_content = _content_resume("__tests__/template.marko_1_content", "Body Content", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], {
		class: "x",
		content: $mybox_content($scope)
	});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
