// tags/child.marko
const $template$1 = "<div><!></div>";
const $walks$1 = " D%l";
const $setup$1 = () => {};
const $input_thing_content_direct = /* @__PURE__ */ _dynamic_tag_content("#text/1");
const $input_thing_selected = /* @__PURE__ */ _const("input_thing_selected", ($scope) => _attr_class_item($scope["#div/0"], "selected", $scope.input_thing_selected));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/1");
const $input_thing_content = $dynamicTag;
const $input = ($scope, input) => $input_thing($scope, input.thing);
const $input_thing = ($scope, input_thing) => {
	$input_thing_selected($scope, input_thing?.selected);
	$input_thing_content($scope, input_thing?.content);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<button>Toggle</button>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}& b`)($walks$1);
const $myThing_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<span>The thing</span>", "b");
const $myThing = ($scope, myThing) => $input_thing($scope["#childScope/0"], myThing);
const $selected = /* @__PURE__ */ _let("selected/2", ($scope) => $myThing($scope, {
	selected: $scope.selected,
	content: $myThing_content($scope)
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$selected($scope, !$scope.selected);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$selected($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
