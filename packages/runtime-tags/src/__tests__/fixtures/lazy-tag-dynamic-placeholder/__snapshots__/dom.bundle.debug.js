// template.marko
const $template = "<button class=toggle>Toggle</button><button class=inc>Inc</button><!><!>";
const $walks = " b b%c";
const Child = /* @__PURE__ */ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_2_content", "loading...", "b");
const $try_content__dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $try_content__show__OR__value = /* @__PURE__ */ _or(1, ($scope) => $try_content__dynamicTag($scope, $scope._.show ? Child : null, () => ({
	label: "x",
	value: $scope._.value
})));
const $try_content__show = /* @__PURE__ */ _closure_get("show", $try_content__show__OR__value);
const $try_content__setup = ($scope) => {
	$try_content__show($scope);
	$try_content__value($scope);
};
const $try_content__value = /* @__PURE__ */ _closure_get("value", $try_content__show__OR__value);
const $show__closure = /* @__PURE__ */ _closure($try_content__show);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */ _let("show/3", ($scope) => {
	$show__closure($scope);
	$show__script($scope);
});
const $value__closure = /* @__PURE__ */ _closure($try_content__value);
const $value__script = _script("__tests__/template.marko_0_value", ($scope) => _on($scope["#button/1"], "click", function() {
	$value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */ _let("value/4", ($scope) => {
	$value__closure($scope);
	$value__script($scope);
});
const $try = /* @__PURE__ */ _try("#text/2", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$show($scope, true);
	$value($scope, 1);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);

// child.marko
const $template = "<div><!>: <!></div>";
const $walks = "D%c%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input_value = ($scope, input_value) => _text($scope["#text/1"], input_value);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var child_default = /* @__PURE__ */ _template("__tests__/child.marko", $template, $walks, $setup, $input);
