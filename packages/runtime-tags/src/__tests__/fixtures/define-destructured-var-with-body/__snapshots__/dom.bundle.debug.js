// template.marko
const $template = "<span> </span>";
const $walks = "D l";
const $pattern2 = ($scope, $pattern) => _text($scope["#text/0"], $pattern.value);
function $setup($scope) {
	$pattern2($scope, { value: 2 });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
