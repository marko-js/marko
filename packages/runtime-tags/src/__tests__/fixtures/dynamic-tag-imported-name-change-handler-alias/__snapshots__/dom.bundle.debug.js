// tag-name.ts
var tag_name_default = "input";
function pick(value) {
	return value;
}

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $pattern2 = ($scope, $pattern) => $cb($scope, $pattern.cb);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $cb = /*@__PURE__*/ _const("cb", ($scope) => $dynamicTag($scope, tag_name_default, ($_) => ({ valueChange: $scope.cb })));
const $input = ($scope, input) => $pattern2($scope, pick(input));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
