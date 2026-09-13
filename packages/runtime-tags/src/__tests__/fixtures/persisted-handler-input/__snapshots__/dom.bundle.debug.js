// template.marko
const $template = "<main><h1> </h1><button>read</button></main>";
const $walks = "E l l";
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => _text($scope["#text/0"], $scope.input_title));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function(ev) {
	ev.target.dataset.seen = $scope.input_title;
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
