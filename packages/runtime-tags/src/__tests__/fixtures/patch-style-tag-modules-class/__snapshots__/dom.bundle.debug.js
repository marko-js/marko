// template.marko
const $template = /*@__PURE__*/ (() => `<div class="${void 0}"> </div><!><!>`)();
const $walks = "D l%c";
const $setup = () => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ (() => `<span class="${void 0}"></span>`)());
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// v:template.marko.module.css
var v_template_marko_module_default = "\n  .content {\n    color: green;\n  }\n";
