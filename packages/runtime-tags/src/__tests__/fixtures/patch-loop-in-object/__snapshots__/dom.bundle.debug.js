// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
const $for_content__input_note = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input_note#0:4/setup", "#ul/0", ($scope) => _text($scope["#text/2"], $scope._.input_note), 6);
const $for_content__setup = ($scope) => {
	$for_content__input_note._($scope);
	_text($scope["#text/0"], $scope["#LoopKey"]);
};
const $for_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[1]);
const $for = /*@__PURE__*/ _for_in("#ul/0", "<li><!>=<!> (<!>)</li>", "D%c%c%", $for_content__setup, $for_content__$params);
const $pairs = _let("pairs/5", ($scope) => $for($scope, [$scope.pairs]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$pairs($scope, {
		...$scope.pairs,
		["k" + Object.keys($scope.pairs).length]: 2
	});
}));
function $setup($scope) {
	$pairs($scope, { a: 1 });
	$setup__script($scope);
}
const $input = ($scope, input) => $input_note($scope, input.note);
const $input_note = /*@__PURE__*/ _const("input_note", $for_content__input_note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
