// tags/my-box.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/my-box.marko_0_input", ($scope) => _attrs_script($scope, "#div/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$input__script($scope);
});
var my_box_default = /* @__PURE__ */ _template("__tests__/tags/my-box.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)(" b");
const $mybox_content__count__script = _script("__tests__/template.marko_1_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$mybox_content__count($scope, $scope.count + 1);
}));
const $mybox_content__count = /* @__PURE__ */ _let("count/2", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$mybox_content__count__script($scope);
});
const $mybox_content__setup = ($scope) => $mybox_content__count($scope, 0);
const $mybox_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<button type=button class=inc>increment</button><span class=count> </span>", " bD l", $mybox_content__setup);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], {
		class: "x",
		content: $mybox_content($scope)
	});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
