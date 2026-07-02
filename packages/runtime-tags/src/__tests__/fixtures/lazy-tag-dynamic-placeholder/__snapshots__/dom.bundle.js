// template.marko
const Child = /* @__PURE__ */ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
_enable_catch();
const $placeholder_content = _content_resume("b0", "loading...", "b");
const $try_content__dynamicTag = /* @__PURE__ */ _dynamic_tag(0);
const $try_content__show__OR__value = /* @__PURE__ */ _or(1, ($scope) => $try_content__dynamicTag($scope, $scope._.d ? Child : null, () => ({
	label: "x",
	value: $scope._.e
})));
const $try_content__show = /* @__PURE__ */ _closure_get(3, $try_content__show__OR__value);
const $try_content__value = /* @__PURE__ */ _closure_get(4, $try_content__show__OR__value);
const $show = /* @__PURE__ */ _let(3, /* @__PURE__ */ _closure($try_content__show));
const $value = /* @__PURE__ */ _let(4, /* @__PURE__ */ _closure($try_content__value));
const $setup__script = _script("b2", ($scope) => {
	_on($scope.a, "click", function() {
		$show($scope, !$scope.d);
	});
	_on($scope.b, "click", function() {
		$value($scope, $scope.e + 1);
	});
});

// child.marko
const $template = "<div><!>: <!></div>";
const $walks = "D%c%l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input_value = ($scope, input_value) => _text($scope.b, input_value);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var child_default = /* @__PURE__ */ _template("a", $template, $walks, $setup, $input);
