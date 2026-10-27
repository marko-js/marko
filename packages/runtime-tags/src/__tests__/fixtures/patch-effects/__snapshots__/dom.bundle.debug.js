// template.marko
const $template = "<div><h1> </h1><button>Click</button></div>";
const $walks = "E l l";
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function(ev) {
	const el = ev.target;
	el.dataset.clicks = String(+(el.dataset.clicks || 0) + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
