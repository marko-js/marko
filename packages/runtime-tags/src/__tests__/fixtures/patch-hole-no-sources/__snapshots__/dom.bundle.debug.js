// template.marko
const $template = "<main><p> </p><h1> </h1><!></main>";
const $walks = "E lD l%l";
const $setup = () => {};
let renders = 0;
const $input_title = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $if = /*@__PURE__*/ _if("#text/2", "<span> </span>", "D ");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
