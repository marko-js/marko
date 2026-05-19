// tags/my-let.marko
const $template$2 = "";
const $walks$2 = "";
const $value = /* @__PURE__ */ _let("value/3", ($scope) => _return($scope, $scope.value));
const $input_value = ($scope, input_value) => $value($scope, input_value);
function $setup$2($scope) {
	_return_change($scope, $valueChange($scope));
}
const $input$1 = ($scope, input) => $input_value($scope, input.value);
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/tags/my-let.marko_0/valueChange", $valueChange);
var my_let_default = /* @__PURE__ */ _template("__tests__/tags/my-let.marko", "", "", $setup$2, $input$1);

// tags/my-tag.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
const $input = ($scope, input) => $input_content($scope, input.content);
var my_tag_default = /* @__PURE__ */ _template("__tests__/tags/my-tag.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)("", $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1) => `b0${_w0}&/${_w1}&b`)("", "b%c");
const $mytag_content__count__script = _script("__tests__/template.marko_1_count", ($scope) => _on($scope["#button/0"], "click", function() {
	_var_change($scope._["#childScope/0"], $scope._.count + 1, "count");
}));
const $mytag_content__count = /* @__PURE__ */ _closure_get("count", ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	$mytag_content__count__script($scope);
});
const $mytag_content__setup = $mytag_content__count;
const $mytag_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<button> </button>", " D l", $mytag_content__setup);
const $count__closure = /* @__PURE__ */ _closure($mytag_content__count);
const $count = _var_resume("__tests__/template.marko_0_count/var", /* @__PURE__ */ _const("count", $count__closure));
function $setup($scope) {
	_var($scope, "#childScope/0", $count);
	$setup$2($scope["#childScope/0"]);
	$input_value($scope["#childScope/0"], 0);
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_content($scope["#childScope/2"], $mytag_content($scope));
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
