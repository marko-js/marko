// child.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $setup__script = _script("__tests__/child.marko_0", ($scope) => console.log("SHOULD NOT LOG"));
const $setup = $setup__script;
const $input = ($scope, input) => $input_value($scope, input.value);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", $setup, $input);

// template.marko
const $template = "<button>Toggle</button><!><!>";
const $walks = " b%c";
const Child = /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default));
_enable_catch();
const $placeholder_content = _content_resume("__tests__/template.marko_3_content", "Loading...", "b");
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => $await_content__dynamicTag($scope, $scope._._.show ? Child : null, () => ({ value: 1 })), ($scope) => $scope._._, "__tests__/template.marko_2_show/pending");
const $await_content__setup = $await_content__show;
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%c", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(undefined, 1));
};
const $show__closure = /*@__PURE__*/ _closure($await_content__show);
const $show__script = _script("__tests__/template.marko_0_show", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
const $show = /*@__PURE__*/ _let("show/2", ($scope) => {
	$show__closure($scope);
	$show__script($scope);
});
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%c", $try_content__setup);
function $setup($scope) {
	$show($scope, true);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
