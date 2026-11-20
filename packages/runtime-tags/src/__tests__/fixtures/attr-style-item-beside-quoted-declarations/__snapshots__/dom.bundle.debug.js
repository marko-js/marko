// template.marko
const $template = "<div style=\"content:'a;color:red'\"></div><div style=background:url(data:image/png;color:x)></div><div style=--note:a\\;color:b></div><div style=\"--ratio: 16:9;--frame: 4:3\"></div><div style=display:-webkit-box;display:flex></div>";
const $walks = " b b b c";
const $setup = ($_) => {};
const $input_tint = ($scope, input_tint) => {
	_attr_style_item($scope["#div/0"], "color", input_tint);
	_attr_style_item($scope["#div/1"], "color", input_tint);
	_attr_style_item($scope["#div/2"], "color", input_tint);
	_attr_style_item($scope["#div/3"], "color", input_tint);
};
const $input = ($scope, input) => $input_tint($scope, input.tint);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
