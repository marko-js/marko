// tags/my-box.marko
const $template$1 = "<section></section><footer></footer>";
const $walks$1 = " b b";
const $setup$1 = () => {};
const $input_head__script = _script("__tests__/tags/my-box.marko_0_input_head", ($scope) => _attrs_script($scope, "#section/0"));
const $input_head = /* @__PURE__ */ _const("input_head", ($scope) => {
	_attrs_content($scope, "#section/0", $scope.input_head);
	$input_head__script($scope);
});
const $input_foot__script = _script("__tests__/tags/my-box.marko_0_input_foot", ($scope) => _attrs_script($scope, "#footer/1"));
const $input_foot = /* @__PURE__ */ _const("input_foot", ($scope) => {
	_attrs_content($scope, "#footer/1", $scope.input_foot);
	$input_foot__script($scope);
});
const $input = ($scope, input) => {
	$input_head($scope, input.head);
	$input_foot($scope, input.foot);
};
var my_box_default = /* @__PURE__ */ _template("__tests__/tags/my-box.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $head_content__n__script = _script("__tests__/template.marko_1_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$head_content__n($scope, $scope.n + 1);
}));
const $head_content__n = /* @__PURE__ */ _let("n/2", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$head_content__n__script($scope);
});
const $head_content__setup = ($scope) => $head_content__n($scope, 0);
const $head_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<button> </button>", " D l", $head_content__setup);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_head($scope["#childScope/0"], attrTag({
		id: "h",
		content: $head_content($scope)
	}));
	$input_foot($scope["#childScope/0"], attrTag({ class: "f" }));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
