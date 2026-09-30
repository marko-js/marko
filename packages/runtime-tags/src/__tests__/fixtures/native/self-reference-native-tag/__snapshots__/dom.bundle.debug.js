// template.marko
const $template = "<button></button>";
const $walks = " b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	_el_read($scope["#button/0"]).innerHTML = "clicked";
}));
const $setup = $setup__script;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
