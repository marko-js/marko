// template.marko
const Child = /* @__PURE__ */ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
_enable_catch();
const $placeholder_content = _content_resume("b1", "Loading...", "b");
const $await_content__dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $await_content__show = /* @__PURE__ */ _closure_get(2, ($scope) => $await_content__dynamicTag($scope, $scope._._.c ? Child : null, () => ({ value: 1 })), ($scope) => $scope._._, "b0");
const $show__closure = /* @__PURE__ */ _closure($await_content__show);
const $show__script = _script("b3", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
const $show = /* @__PURE__ */ _let(2, ($scope) => {
	$show__closure($scope);
	$show__script($scope);
});

// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope.a, input_value);
const $setup__script = _script("a0", ($scope) => console.log("SHOULD NOT LOG"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /* @__PURE__ */ _template("a", $template, "D l", $setup, $input);
