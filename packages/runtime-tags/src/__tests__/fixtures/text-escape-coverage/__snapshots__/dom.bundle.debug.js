// template.marko
const $template = "<div> </div><div> </div><div>before mid <!> end after</div>";
const $walks = "D lD lDb%l";
const $setup = () => {};
const $input_a = ($scope, input_a) => _text($scope["#text/0"], input_a ? null : 1);
const $input_b = ($scope, input_b) => _text($scope["#text/1"], input_b ? true : "x<y");
const $input_c = ($scope, input_c) => _text($scope["#text/2"], `${input_c}`);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_c($scope, input.c);
};
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup, $input);
