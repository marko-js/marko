// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = () => {};
const Child = _load_ready_template("ready:__tests__/child.marko", /*@__PURE__*/ _load_template("__tests__/child.marko", () => import("./child.mjs").then((mod) => mod.default)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_show__OR__input_label = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.input_show ? Child : null, () => ({ label: $scope.input_label })));
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__OR__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_show__OR__input_label);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", 0, $input);

// child.marko
const $template = "<p class=child> </p>";
const $walks = "D l";
const $setup = () => {};
const $input_label = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "D l", 0, $input);
