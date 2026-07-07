// template.marko
const $template = "<button></button>";
const $walks = " b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	document.getElementById("count").textContent++;
}));
const $setup = $setup__script;
const $if = /*@__PURE__*/ _if("#button/0", "<span id=count>0</span>", "b");
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
