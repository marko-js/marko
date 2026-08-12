// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = () => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_announce__script = _script("__tests__/template.marko_0_input_announce#4", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.announce = $scope.input_announce;
		el.dataset.runs = String(+(el.dataset.runs || 0) + 1);
	}
});
const $input_announce = /*@__PURE__*/ _const("input_announce", $input_announce__script);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_announce($scope, input.announce);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup, $input);
